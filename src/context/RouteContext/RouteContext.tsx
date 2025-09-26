"use client"

import { createContext, PropsWithChildren, useContext, useEffect, useReducer, useState } from "react"
import { api } from "../AuthContext/AuthContext"
import { Route, RouteMap, Board, BoardAction } from "@/types/routeInit"


const boardInitialState: Board = {
  columns: {},
  ordered: Object.keys({})
}

const BoardContext = createContext({
  boardState: boardInitialState,
  dispatch: (action: BoardAction) => { }
})

export const BoardProvider = ({ children }: PropsWithChildren) => {
  const [boardState, dispatch] = useReducer(
    boardReducer,
    boardInitialState
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const localBoardData = await api.get('/routes')
      const dataObject = transformData(localBoardData.data);
      dispatch({ type: "SET_TRIPS", payload: dataObject });
      setLoading(false);
    } catch (error) {
      console.log(error)
    }

  }

  function transformData(routes: Route[]): Board {
    const filteredRoutes = routes
      .filter(route => route.status?.id === 'INIT')
      .map(route => ({
        ...route,
        routeVisitsStations: [...route.routeVisitsStations].sort(
          (a, b) => a.ordinalNumber - b.ordinalNumber
        ),
      }));

    const columns: RouteMap = {};
    const ordered: string[] = [];

    for (const route of filteredRoutes) {
      columns[route.id] = route;
      ordered.push(route.id);
    }

    return {
      columns,
      ordered,
    };
  }

  if (loading) return;
  return (
    <BoardContext.Provider value={{ boardState, dispatch }}>
      {children}
    </BoardContext.Provider>
  );
}

export function useBoard() {
  return useContext(BoardContext);
}


function boardReducer(state: Board, action: BoardAction): Board {
  switch (action.type) {
    case "SET_TRIPS": {
      return action.payload;
    }
    case "MOVE_COLUMN": {
      const result = [...state.ordered];
      const [removed] = result.splice(action.payload.source.index, 1);
      result.splice(action.payload.destination.index, 0, removed);
      const newState = { ...state, ordered: result };
      return newState;
    }

    case "ADD_STATION": {
      const idColumn = action.payload.idColumn;

      const newRoute = state.columns[idColumn]

      newRoute.routeVisitsStations.push({
        station: action.payload.station,
        ordinalNumber: action.payload.ordinalNumber,
        etd: action.payload.etd,
        eta: action.payload.eta,
        departuredAt: action.payload.departuredAt,
        arrivedAt: action.payload.arrivedAt
      })

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [idColumn]: newRoute,
        },
      };

      return newState

    }

    case "DELETE_STATION": {
      const idColumn = action.payload.idColumn;
      const idStation = action.payload.station

      const newRoute = state.columns[idColumn]

      newRoute.routeVisitsStations = newRoute.routeVisitsStations.filter((station) => station.station !== idStation)

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [idColumn]: newRoute,
        },
      };

      return newState
    }

    case "MOVE_STATION": {
      if (
        action.payload.source.droppableId ===
        action.payload.destination.droppableId
      ) {
        // Reordering within the same column
        const newRouteVisitsStations = [...state.columns[action.payload.source.droppableId].routeVisitsStations];
        const [movedTrip] = newRouteVisitsStations.splice(
          action.payload.source.index + 1,
          1
        );
        newRouteVisitsStations.splice(action.payload.destination.index + 1, 0, movedTrip);

        const newTrip = { ...state.columns[action.payload.source.droppableId], routeVisitsStations: newRouteVisitsStations }

        const newState = {
          ...state,
          columns: {
            ...state.columns,
            [action.payload.source.droppableId]: newTrip,
          },
        };
        return newState;
      }

      // Handling movement between different columns
      const startRouteVisitsStations = [...state.columns[action.payload.source.droppableId].routeVisitsStations];
      const finishRouteVisitsStations = [
        ...state.columns[action.payload.destination.droppableId].routeVisitsStations,
      ];
      const [removedTrip] = startRouteVisitsStations.splice(action.payload.source.index + 1, 1);
      finishRouteVisitsStations.splice(action.payload.destination.index + 1, 0, removedTrip);

      const newStartTrip = { ...state.columns[action.payload.source.droppableId], routeVisitsStations: startRouteVisitsStations };
      const newFinishTrip = { ...state.columns[action.payload.destination.droppableId], routeVisitsStations: finishRouteVisitsStations }

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [action.payload.source.droppableId]: newStartTrip,
          [action.payload.destination.droppableId]: newFinishTrip,
        },
      };

      return newState;
    }

    case "ADD_TRIP": {
      const newState = {
        columns: {
          ...state.columns,
          [action.payload.id]: action.payload
        },
        ordered: [...state.ordered, action.payload.id]
      }

      return newState

    }

    case "DELETE_TRIP": {
      const idColumn = action.payload.idColumn
      const newColumns = Object.fromEntries(
        Object.entries(state.columns).filter(([id]) => id !== idColumn)
      );
      const newOrdered = state.ordered.filter(id => id !== idColumn);

      return {
        columns: newColumns,
        ordered: newOrdered
      };

    }
    default: {
      return boardInitialState;
    }
  }
}
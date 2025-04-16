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
      console.log(dataObject)
      // const dataObject = localBoardData.data;
      dispatch({ type: "SET_TRIPS", payload: dataObject });
      setLoading(false);
    } catch (error) {
      console.log(error)
    }

  }

  function transformData(routes: Route[]): Board {
    const filteredRoutes = routes
      .filter(route => route.plan?.id === 'INIT')
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
      console.log('action.payload', action.payload)
      return action.payload;
    }
    case "MOVE_COLUMN": {
      const result = [...state.ordered];
      const [removed] = result.splice(action.payload.source.index, 1);
      result.splice(action.payload.destination.index, 0, removed);

      const newState = { ...state, ordered: result };
      // save locally
      // localStorage.setItem("@Board", JSON.stringify(newState));
      return newState;
    }
    // case "MOVE_TRIP": {
    //   if (
    //     action.payload.source.droppableId ===
    //     action.payload.destination.droppableId
    //   ) {
    //     // Reordering within the same column
    //     const reorderedTrips = [
    //       ...state.columns[action.payload.source.droppableId],
    //     ];
    //     const [movedTrip] = reorderedTrips.splice(
    //       action.payload.source.index,
    //       1
    //     );
    //     reorderedTrips.splice(action.payload.destination.index, 0, movedTrip);

    //     const newState = {
    //       ...state,
    //       columns: {
    //         ...state.columns,
    //         [action.payload.source.droppableId]: reorderedTrips,
    //       },
    //     };
    //     // save locally
    //     // localStorage.setItem("@Board", JSON.stringify(newState));
    //     // Exit after handling reordering within the same column
    //     return newState;
    //   }

    //   // Handling movement between different columns
    //   const startTrips = [...state.columns[action.payload.source.droppableId]];
    //   const finishTrips = [
    //     ...state.columns[action.payload.destination.droppableId],
    //   ];
    //   const [removedTrip] = startTrips.splice(action.payload.source.index, 1);
    //   finishTrips.splice(action.payload.destination.index, 0, removedTrip);

    //   const newState = {
    //     ...state,
    //     columns: {
    //       ...state.columns,
    //       [action.payload.source.droppableId]: startTrips,
    //       [action.payload.destination.droppableId]: finishTrips,
    //     },
    //   };

    //   // save locally
    //   // localStorage.setItem("@Board", JSON.stringify(newState));

    //   return newState;
    // }
    default: {
      return boardInitialState;
    }
  }
}
"use client";

import dynamic from "next/dynamic";

const Map = dynamic(
  () => import("@/components/Map").then((component) => component.Map),
  { ssr: false }
);

const HomePage = () => {
  const locations = [{
    "address": "1284 Quang Trung, p14, Gò Vấp",
    "id": "1420",
    "locationId": 1420,
    "locationName": "Bưu Cục 1284 Quang Trung-Q.Gò Vấp-HCM",
    "parentLocation": [
      "REGION/E",
      "PROVINCE/202",
      "DISTRICT/1461",
      "WARD/21310",
      "SECTION/EXREG0078S"
    ],
    "email": "",
    "lat": 10.844834,
    "lng": 106.639579,
    "wardName": "Phường 14",
    "districtName": "Quận Gò Vấp",
    "provinceName": "Hồ Chí Minh",
    "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.844834,106.639579\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  }
  ]

  // const locations = [
  //   {
  //     "address": "1284 Quang Trung, p14, Gò Vấp",
  //     "id": "1420",
  //     "locationId": 1420,
  //     "locationName": "Bưu Cục 1284 Quang Trung-Q.Gò Vấp-HCM",
  //     "parentLocation": [
  //       "REGION/E",
  //       "PROVINCE/202",
  //       "DISTRICT/1461",
  //       "WARD/21310",
  //       "SECTION/EXREG0078S"
  //     ],
  //     "email": "",
  //     "lat": 10.844834,
  //     "lng": 106.639579,
  //     "wardName": "Phường 14",
  //     "districtName": "Quận Gò Vấp",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.844834,106.639579\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "Số 252 Minh Phụng, Phường 2, Quận 11, HCM",
  //     "id": "1336",
  //     "locationId": 1336,
  //     "locationName": "Bưu Cục 252 Minh Phụng-Q.11-HCM",
  //     "parentLocation": [
  //       "REGION/E",
  //       "PROVINCE/202",
  //       "DISTRICT/1453",
  //       "WARD/21102",
  //       "SECTION/EXREG0082S"
  //     ],
  //     "email": "",
  //     "lat": 10.75561759411038,
  //     "lng": 106.64372159732207,
  //     "wardName": "Phường 2",
  //     "districtName": "Quận 11",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.75561759411038,106.64372159732207\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "291 Nguyễn Sơn, P PHú Thạnh, Quận Tân Phú, HCM",
  //     "id": "1464",
  //     "locationId": 1464,
  //     "locationName": "Bưu Cục 291 Nguyễn Sơn-Q.Tân Phú-HCM",
  //     "parentLocation": [
  //       "REGION/E",
  //       "PROVINCE/202",
  //       "DISTRICT/1456",
  //       "WARD/21503",
  //       "SECTION/EXREG0122S"
  //     ],
  //     "email": "",
  //     "lat": 10.783838,
  //     "lng": 106.623397,
  //     "wardName": "Phường Phú Thạnh",
  //     "districtName": "Quận Tân Phú",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.783838,106.623397\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "20/48A Bờ Bao Tân Thắng-Q. Tân Phú-HCM",
  //     "id": "1703",
  //     "locationId": 1703,
  //     "locationName": "Bưu Cục 444 Lê Trọng Tấn-Q.Tân Phú-HCM",
  //     "parentLocation": [
  //       "REGION/E",
  //       "PROVINCE/202",
  //       "DISTRICT/1456",
  //       "WARD/21506",
  //       "SECTION/EXREG0122S"
  //     ],
  //     "email": "",
  //     "lat": 10.8070035,
  //     "lng": 106.6203028,
  //     "wardName": "Phường Sơn Kỳ",
  //     "districtName": "Quận Tân Phú",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.8070035,106.6203028\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "119 Nguyễn Văn Luông, Phường 10, Quận 6, TP.HCM",
  //     "id": "1418_bk",
  //     "locationId": 1418,
  //     "locationName": "Bưu Cục 119 Nguyễn Văn Luông-Q.6-HCM",
  //     "parentLocation": [
  //       "REGION/E",
  //       "PROVINCE/202",
  //       "DISTRICT/1448",
  //       "WARD/20610",
  //       "SECTION/EXREG0081S"
  //     ],
  //     "email": "",
  //     "lat": 10.73829,
  //     "lng": 106.63353,
  //     "wardName": "Phường 10",
  //     "districtName": "Quận 6",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.73829,106.63353\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "Số 63 Vĩnh Hội, Phường 4, Quận 4",
  //     "id": "1337",
  //     "locationId": 1337,
  //     "locationName": "Bưu Cục 63 Vĩnh Hội-Q.4-HCM",
  //     "parentLocation": [
  //       "REGION/E",
  //       "PROVINCE/202",
  //       "DISTRICT/1446",
  //       "WARD/20404",
  //       "SECTION/EXREG0076S"
  //     ],
  //     "email": "",
  //     "lat": 10.756358,
  //     "lng": 106.703772,
  //     "wardName": "Phường 4",
  //     "districtName": "Quận 4",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.756358,106.703772\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "Số 90 Bà Hom, Phường 13, Quận 6, HCM",
  //     "id": "1338",
  //     "locationId": 1338,
  //     "locationName": "Bưu Cục 90 Bà Hom-Q.6-HCM",
  //     "parentLocation": [
  //       "REGION/E",
  //       "PROVINCE/202",
  //       "DISTRICT/1448",
  //       "WARD/20613",
  //       "SECTION/EXREG0081S"
  //     ],
  //     "email": "",
  //     "lat": 10.754978,
  //     "lng": 106.629261,
  //     "wardName": "Phường 13",
  //     "districtName": "Quận 6",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.754978,106.629261\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "C1212A4, Ấp 3, xã Tân Kiên, huyện Bình Chánh, TP.HCM",
  //     "id": "1333",
  //     "locationId": 1333,
  //     "locationName": "Bưu Cục Tân Kiên-Bình Chánh-HCM",
  //     "parentLocation": [
  //       "REGION/E",
  //       "PROVINCE/202",
  //       "DISTRICT/1533",
  //       "WARD/22012",
  //       "SECTION/EXREG0085S"
  //     ],
  //     "email": "",
  //     "lat": 10.7115,
  //     "lng": 106.600723,
  //     "wardName": "Xã Tân Kiên",
  //     "districtName": "Huyện Bình Chánh",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.7115,106.600723\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "104 Lương Ngọc Quyến-Q.Bình Thạnh-HCM",
  //     "id": "1479",
  //     "locationId": 1479,
  //     "locationName": "Bưu Cục 104 Lương Ngọc Quyến-Q.Bình Thạnh-HCM",
  //     "parentLocation": [
  //       "REGION/E",
  //       "PROVINCE/202",
  //       "DISTRICT/1462",
  //       "WARD/21609",
  //       "SECTION/EXREG0074S"
  //     ],
  //     "email": "",
  //     "lat": 10.8245,
  //     "lng": 106.701861,
  //     "wardName": "Phường 13",
  //     "districtName": "Quận Bình Thạnh",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.8245,106.701861\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "202 Ấp An Hòa Xã Tam Thôn Hiệp H Cần Giờ, TP.Hồ Chí Minh",
  //     "id": "1302",
  //     "locationId": 1302,
  //     "locationName": "Bưu Cục Cần Giờ-HCM",
  //     "parentLocation": [
  //       "REGION/E",
  //       "PROVINCE/202",
  //       "DISTRICT/2090",
  //       "WARD/22406",
  //       "SECTION/EXREG0096S"
  //     ],
  //     "email": "",
  //     "lat": 10.5878863,
  //     "lng": 106.851401,
  //     "wardName": "Xã Tam Thôn Hiệp",
  //     "districtName": "Huyện Cần Giờ",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.5878863,106.851401\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "242 Tỉnh Lộ 2, Ấp Xóm Mới, Xã Trung Lập Hạ, Củ Chi, Thành phố.HCM",
  //     "id": "1290",
  //     "locationId": 1290,
  //     "locationName": "Bưu Cục 242 Tỉnh Lộ 2-Củ Chi-HCM",
  //     "parentLocation": [
  //       "REGION/E",
  //       "PROVINCE/202",
  //       "DISTRICT/1460",
  //       "WARD/22120",
  //       "SECTION/EXREG0092S"
  //     ],
  //     "email": "",
  //     "lat": 11.009473,
  //     "lng": 106.47105,
  //     "wardName": "Xã Trung Lập Hạ",
  //     "districtName": "Huyện Củ Chi",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=11.009473,106.47105\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "1135 Phan Văn Trị P.10, Q.Gò Vấp",
  //     "id": "2276",
  //     "locationId": 2276,
  //     "locationName": "Bưu Cục 1135 Phan Văn Trị-Q.Gò Vấp-HCM",
  //     "parentLocation": [
  //       "REGION/E",
  //       "PROVINCE/202",
  //       "DISTRICT/1461",
  //       "WARD/21306",
  //       "SECTION/EXREG0078S"
  //     ],
  //     "email": "",
  //     "lat": 10.832417,
  //     "lng": 106.673278,
  //     "wardName": "Phường 10",
  //     "districtName": "Quận Gò Vấp",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.832417,106.673278\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "785C Nguyễn Bình, Ấp 2, Xã Nhơn Đức H Nhà Bè",
  //     "id": "1334",
  //     "locationId": 1334,
  //     "locationName": "Bưu Cục 785C Nguyễn Bình-Nhà Bè-HCM",
  //     "parentLocation": [
  //       "REGION/E",
  //       "PROVINCE/202",
  //       "DISTRICT/1534",
  //       "WARD/22304",
  //       "SECTION/EXREG0096S"
  //     ],
  //     "email": "",
  //     "lat": 10.6732006,
  //     "lng": 106.7094557,
  //     "wardName": "Xã Nhơn Đức",
  //     "districtName": "Huyện Nhà Bè",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.6732006,106.7094557\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "29A đường số 5, KP2, Phường cát lái, Quận 2, Hồ Chí Minh",
  //     "id": "1394",
  //     "locationId": 1394,
  //     "locationName": "Bưu Cục 29A Đường Số 5-Q.2-HCM",
  //     "parentLocation": [
  //       "REGION/E",
  //       "PROVINCE/202",
  //       "DISTRICT/1443",
  //       "WARD/20208",
  //       "SECTION/EXREG0119S"
  //     ],
  //     "email": "",
  //     "lat": 10.7751905,
  //     "lng": 106.770249,
  //     "wardName": "Phường Cát Lái",
  //     "districtName": "Quận 2",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.7751905,106.770249\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "338 Bạch Đằng, Phường 2, Quận Tân Bình, TP.Hồ Chí Minh",
  //     "id": "1416",
  //     "locationId": 1416,
  //     "locationName": "Bưu Cục 3/38 Bạch Đằng-Q.Tân Bình-HCM",
  //     "parentLocation": [
  //       "REGION/E",
  //       "PROVINCE/202",
  //       "DISTRICT/1455",
  //       "WARD/21402",
  //       "SECTION/EXREG0077S"
  //     ],
  //     "email": "",
  //     "lat": 10.8153996,
  //     "lng": 106.6714229,
  //     "wardName": "Phường 2",
  //     "districtName": "Quận Tân Bình",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.8153996,106.6714229\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "38E Cây Keo Khu Phố 1 Phường Tam Phú Quận Thủ Đức, Hồ CHí Minh",
  //     "id": "1271",
  //     "locationId": 1271,
  //     "locationName": "Bưu Cục 38E Cây Keo-Q.Thủ Đức-HCM",
  //     "parentLocation": [
  //       "REGION/E",
  //       "PROVINCE/202",
  //       "DISTRICT/3695",
  //       "WARD/90739",
  //       "SECTION/EXREG0095S"
  //     ],
  //     "email": "",
  //     "lat": 10.860642,
  //     "lng": 106.739448,
  //     "wardName": "Phường Tam Phú",
  //     "districtName": "Thành phố Thủ Đức",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.860642,106.739448\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "2999 Phạm Thế Hiển, Phường 7, Quận 8, TP.HCM",
  //     "id": "2376",
  //     "locationId": 2376,
  //     "locationName": "Bưu Cục 2999 Phạm Thế Hiển-Q.8-HCM",
  //     "parentLocation": [
  //       "REGION/E",
  //       "PROVINCE/202",
  //       "DISTRICT/1450",
  //       "WARD/20807",
  //       "SECTION/EXREG0087S"
  //     ],
  //     "email": "",
  //     "lat": 10.7168692,
  //     "lng": 106.6324732,
  //     "wardName": "Phường 7",
  //     "districtName": "Quận 8",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.7168692,106.6324732\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "219F Nơ Trang Long, Phường 12, Quận Bình Thạnh, TP.Hồ Chí Minh",
  //     "id": "2425",
  //     "locationId": 2425,
  //     "locationName": "Bưu Cục 219 Nơ Trang Long-Q.Bình Thạnh-HCM 01",
  //     "parentLocation": [
  //       "REGION/E",
  //       "PROVINCE/202",
  //       "DISTRICT/1462",
  //       "WARD/21608",
  //       "SECTION/EXREG0074S"
  //     ],
  //     "email": "",
  //     "lat": 10.816139,
  //     "lng": 106.697724,
  //     "wardName": "Phường 12",
  //     "districtName": "Quận Bình Thạnh",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.816139,106.697724\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "Số 4 Nhất Chi Mai, Phường 13, Quận Tân Bình, TP.HCM",
  //     "id": "2439",
  //     "locationId": 2439,
  //     "locationName": "Bưu Cục 04 Nhất Chi Mai-Q.Tân Bình-HCM",
  //     "parentLocation": [
  //       "REGION/E",
  //       "PROVINCE/202",
  //       "DISTRICT/1455",
  //       "WARD/21413",
  //       "SECTION/EXREG0088S"
  //     ],
  //     "email": "",
  //     "lat": 10.8028396,
  //     "lng": 106.639924,
  //     "wardName": "Phường 13",
  //     "districtName": "Quận Tân Bình",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.8028396,106.639924\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "16A Lê Hồng Phong, Phường 12, Quận 10, TPHCM",
  //     "id": "2441",
  //     "locationId": 2441,
  //     "locationName": "Bưu Cục 16A Lê Hồng Phong-Q.10-HCM 04",
  //     "parentLocation": [
  //       "REGION/E",
  //       "PROVINCE/202",
  //       "DISTRICT/1452",
  //       "WARD/21012",
  //       "SECTION/EXREG0091S"
  //     ],
  //     "email": "",
  //     "lat": 10.77583,
  //     "lng": 106.67049,
  //     "wardName": "Phường 12",
  //     "districtName": "Quận 10",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.77583,106.67049\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "16A Lê Hồng Phong Phường 12 Quận 10",
  //     "id": "2443",
  //     "locationId": 2443,
  //     "locationName": "Bưu Cục 2 Bis Nguyễn Thị Minh Khai-Q.1-HCM",
  //     "parentLocation": [
  //       "REGION/E",
  //       "PROVINCE/202",
  //       "DISTRICT/1452",
  //       "WARD/21012",
  //       "SECTION/EXREG0081S"
  //     ],
  //     "email": "",
  //     "lat": 10.775683,
  //     "lng": 106.670587,
  //     "wardName": "Phường 12",
  //     "districtName": "Quận 10",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.775683,106.670587\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "Thửa đất số 1128, 1130, tờ bản đồ số 1, phường Đông Hưng Thuận, Quận 12, TP.HCM (gần số 22 Đông Hưng Thuận 5)",
  //     "id": "2451",
  //     "locationId": 2451,
  //     "locationName": "Bưu Cục 1130 Đông Hưng Thuận 05-Q.12-HCM",
  //     "parentLocation": [
  //       "REGION/E",
  //       "PROVINCE/202",
  //       "DISTRICT/1454",
  //       "WARD/21202",
  //       "SECTION/EXREG0124S"
  //     ],
  //     "email": "",
  //     "lat": 10.8390821,
  //     "lng": 106.621627,
  //     "wardName": "Phường Đông Hưng Thuận",
  //     "districtName": "Quận 12",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.8390821,106.621627\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "198C Đường Thạnh Lộc 15, Khu Phố 3C, Phường Thạnh Lộc, Quận 12, TP.HCM",
  //     "id": "2452",
  //     "locationId": 2452,
  //     "locationName": "Bưu Cục 198 Thạnh Lộc 15-Q.12-HCM",
  //     "parentLocation": [
  //       "REGION/E",
  //       "PROVINCE/202",
  //       "DISTRICT/1454",
  //       "WARD/21208",
  //       "SECTION/EXREG0124S"
  //     ],
  //     "email": "",
  //     "lat": 10.8694847,
  //     "lng": 106.6924142,
  //     "wardName": "Phường Thạnh Lộc",
  //     "districtName": "Quận 12",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.8694847,106.6924142\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "291A Nguyễn Duy, Phường 9, Quận 8, Thành Phố Hồ Chí Minh",
  //     "id": "2453",
  //     "locationId": 2453,
  //     "locationName": "Bưu Cục 291A Nguyễn Duy-Q.8-HCM",
  //     "parentLocation": [
  //       "REGION/E",
  //       "PROVINCE/202",
  //       "DISTRICT/1450",
  //       "WARD/20804",
  //       "SECTION/EXREG0087S"
  //     ],
  //     "email": "",
  //     "lat": 10.7445249,
  //     "lng": 106.668321,
  //     "wardName": "Phường 4",
  //     "districtName": "Quận 8",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.7445249,106.668321\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "796 Quang Trung, Phường 8, Quận Gò Vấp, Thành Phố Hồ Chí Minh",
  //     "id": "2485",
  //     "locationId": 2485,
  //     "locationName": "Bưu Cục 796 Quang Trung-Q.Gò Vấp-HCM",
  //     "parentLocation": [
  //       "REGION/E",
  //       "PROVINCE/202",
  //       "DISTRICT/1461",
  //       "WARD/21315",
  //       "SECTION/EXREG0078S"
  //     ],
  //     "email": "",
  //     "lat": 10.837421,
  //     "lng": 106.655115,
  //     "wardName": "Phường 8",
  //     "districtName": "Quận Gò Vấp",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.837421,106.655115\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "558 Phạm Văn Chiêu, Phường 16, Quận Gò Vấp, Thành phố Hồ Chí Minh",
  //     "id": "2486",
  //     "locationId": 2486,
  //     "locationName": "Bưu Cục 558 Phạm Văn Chiêu-Q.Gò Vấp-HCM",
  //     "parentLocation": [
  //       "REGION/E",
  //       "PROVINCE/202",
  //       "DISTRICT/1461",
  //       "WARD/21312",
  //       "SECTION/EXREG0078S"
  //     ],
  //     "email": "",
  //     "lat": 10.851978,
  //     "lng": 106.659357,
  //     "wardName": "Phường 16",
  //     "districtName": "Quận Gò Vấp",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.851978,106.659357\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "16A Lê Hồng Phong P12 Quận 10",
  //     "id": "2488",
  //     "locationId": 2488,
  //     "locationName": "Bưu Cục 480F Cao Thắng - Trường Sa-Q.3-HCM",
  //     "parentLocation": [
  //       "REGION/E",
  //       "PROVINCE/202",
  //       "DISTRICT/1452",
  //       "WARD/21012",
  //       "SECTION/EXREG0121S"
  //     ],
  //     "email": "",
  //     "lat": 10.7760572,
  //     "lng": 106.6704849,
  //     "wardName": "Phường 12",
  //     "districtName": "Quận 10",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.7760572,106.6704849\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "456 Nguyễn Kiệm, Phường 3, Quận Phú Nhuận, Thành Phố Hồ Chí Minh",
  //     "id": "2489",
  //     "locationId": 2489,
  //     "locationName": "Bưu Cục 456 Nguyễn Kiệm-Q.Phú Nhuận-HCM",
  //     "parentLocation": [
  //       "REGION/E",
  //       "PROVINCE/202",
  //       "DISTRICT/1457",
  //       "WARD/21703",
  //       "SECTION/EXREG0079S"
  //     ],
  //     "email": "",
  //     "lat": 10.802363,
  //     "lng": 106.679308,
  //     "wardName": "Phường 3",
  //     "districtName": "Quận Phú Nhuận",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.802363,106.679308\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "141 Đường Số 5, An Phú, Quận 2, TP.Hồ Chí Minh",
  //     "id": "2515",
  //     "locationId": 2515,
  //     "locationName": "Bưu Cục 141 Đường Số 5 An Phú-Q.2-HCM",
  //     "parentLocation": [
  //       "REGION/E",
  //       "PROVINCE/202",
  //       "DISTRICT/1443",
  //       "WARD/20203",
  //       "SECTION/EXREG0119S"
  //     ],
  //     "email": "",
  //     "lat": 10.7981084,
  //     "lng": 106.7329087,
  //     "wardName": "Phường An Phú",
  //     "districtName": "Quận 2",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.7981084,106.7329087\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "971 Nguyễn Kiệm, Phường 3, Quận Gò Vấp",
  //     "id": "2533",
  //     "locationId": 2533,
  //     "locationName": "Bưu Cục 971 Nguyễn Kiệm-Q.Gò Vấp-HCM",
  //     "parentLocation": [
  //       "REGION/E",
  //       "PROVINCE/202",
  //       "DISTRICT/1461",
  //       "WARD/21302",
  //       "SECTION/EXREG0078S"
  //     ],
  //     "email": "",
  //     "lat": 10.8226266,
  //     "lng": 106.6787629,
  //     "wardName": "Phường 3",
  //     "districtName": "Quận Gò Vấp",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.8226266,106.6787629\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "903B Tạ Quang Bửu-P.5-Q.8-HCM",
  //     "id": "2534",
  //     "locationId": 2534,
  //     "locationName": "Bưu Cục 903B Tạ Quang Bửu-Q.8-HCM",
  //     "parentLocation": [
  //       "REGION/E",
  //       "PROVINCE/202",
  //       "DISTRICT/1450",
  //       "WARD/20805",
  //       "SECTION/EXREG0087S"
  //     ],
  //     "email": "",
  //     "lat": 10.7343536,
  //     "lng": 106.6623223,
  //     "wardName": "Phường 5",
  //     "districtName": "Quận 8",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.7343536,106.6623223\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "05 Lê Công Phép, Phường An Lạc, Quận Bình Tân, TP.HCM",
  //     "id": "20011000",
  //     "locationId": 20011000,
  //     "locationName": "Bưu cục 05 Lê Công Phép - Bình Tân - HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1458",
  //       "WARD/21901",
  //       "SECTION/EXREG0120S",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.743137,
  //     "lng": 106.621128,
  //     "wardName": "Phường  An Lạc",
  //     "districtName": "Quận Bình Tân",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.743137,106.621128\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "32 Đường Số 3 Bình Hưng Hoà B, Quận Bình Tân, TP.HCM",
  //     "id": "20018000",
  //     "locationId": 20018000,
  //     "locationName": "Bưu cục 32 đường 3-Q.Bình Tân-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1458",
  //       "WARD/21905",
  //       "SECTION/EXREG0075S",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.80150731,
  //     "lng": 106.5910395,
  //     "wardName": "Phường Bình Hưng Hoà B",
  //     "districtName": "Quận Bình Tân",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.80150731,106.5910395\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "63 Ký Hòa, Phường 11, Quận 5, TP.HCM",
  //     "id": "20026000",
  //     "locationId": 20026000,
  //     "locationName": "Bưu Cục 63 Ký Hòa-Q.5-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1447",
  //       "WARD/20511",
  //       "SECTION/EXREG0084S",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.75432,
  //     "lng": 106.66064,
  //     "wardName": "Phường 11",
  //     "districtName": "Quận 5",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.75432,106.66064\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "117 Hùng Vương, Phường 4, Quận 5, TP.HCM",
  //     "id": "20027000",
  //     "locationId": 20027000,
  //     "locationName": "Bưu Cục 117 Hùng Vương-Q.5-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1447",
  //       "WARD/20511",
  //       "SECTION/EXREG0084S",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.7617,
  //     "lng": 106.67578,
  //     "wardName": "Phường 11",
  //     "districtName": "Quận 5",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.7617,106.67578\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "753 Lũy Bán Bích, Phường Phú Thọ Hòa, Quận Tân Phú, TP.HCM",
  //     "id": "20037000",
  //     "locationId": 20037000,
  //     "locationName": "Bưu cục 753 Lũy Bán Bích-Q.Tân Phú-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1456",
  //       "WARD/21504",
  //       "SECTION/EXREG0122S",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.78394,
  //     "lng": 106.63613,
  //     "wardName": "Phường Phú Thọ Hòa",
  //     "districtName": "Quận Tân Phú",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.78394,106.63613\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "295F Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
  //     "id": "20052000",
  //     "locationId": 20052000,
  //     "locationName": "Bưu Cục 295F Lý Thường Kiệt-Quận 11-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1453",
  //       "WARD/21115",
  //       "SECTION/EXREG0082S",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.7762921,
  //     "lng": 106.6562777,
  //     "wardName": "Phường 15",
  //     "districtName": "Quận 11",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.7762921,106.6562777\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "42 Võ Thị Nhờ, Khu Phố 1, Phường Tân Thuận Đông, Quận 7, TP.HCM",
  //     "id": "20073000",
  //     "locationId": 20073000,
  //     "locationName": "Bưu Cục 42 Võ Thị Nhờ-Q.7-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1449",
  //       "WARD/20709",
  //       "SECTION/EXREG0090S",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.745322,
  //     "lng": 106.731323,
  //     "wardName": "Phường Tân Thuận Đông",
  //     "districtName": "Quận 7",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.745322,106.731323\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "T30 Nguyễn Hữu Hào, Phường 6, Quận 4, Tp. Hồ Chí Minh",
  //     "id": "20075000",
  //     "locationId": 20075000,
  //     "locationName": "Bưu Cục T30 Nguyễn Hữu Hào-Q.4-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1446",
  //       "WARD/20406",
  //       "SECTION/EXREG0076S",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.75995,
  //     "lng": 106.70209,
  //     "wardName": "Phường 6",
  //     "districtName": "Quận 4",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.75995,106.70209\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "9 Hồng Bàng. Phường 1, bình Thạnh, TP Hồ Chí Minh",
  //     "id": "20078000",
  //     "locationId": 20078000,
  //     "locationName": "Bưu Cục 9 Hồng Bàng-Q.Bình Thạnh-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1462",
  //       "WARD/21601",
  //       "SECTION/EXREG0074S",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.8025201,
  //     "lng": 106.698029,
  //     "wardName": "Phường 1",
  //     "districtName": "Quận Bình Thạnh",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.8025201,106.698029\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "197 Nguyễn Oanh , Phường 17, Gò Vấp, TP Hồ Chí Minh",
  //     "id": "20079000",
  //     "locationId": 20079000,
  //     "locationName": "Bưu Cục 197 Nguyễn Oanh-Q.Gò Vấp-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1461",
  //       "WARD/21313",
  //       "SECTION/EXREG0078S",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.84027285,
  //     "lng": 106.6760112,
  //     "wardName": "Phường 17",
  //     "districtName": "Quận Gò Vấp",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.84027285,106.6760112\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "Bưu cục 58 Vũ Tông Phan, Phường An Phú, Quận 2, Thành phố Hồ Chí Minh",
  //     "id": "20102000",
  //     "locationId": 20102000,
  //     "locationName": "Bưu cục 58 Vũ Tông Phan-Q.2-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1443",
  //       "WARD/20203",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.797341959045193,
  //     "lng": 106.74181894084059,
  //     "wardName": "Phường An Phú",
  //     "districtName": "Quận 2",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.797341959045193,106.74181894084059\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "251 Hàn Hải Nguyên, Phường 2, Quận 11, Thành phố Hồ Chí Minh",
  //     "id": "20105000",
  //     "locationId": 20105000,
  //     "locationName": "Bưu Cục 251 Hàn Hải Nguyên-Q.11-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1453",
  //       "WARD/21102",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.75824,
  //     "lng": 106.645235,
  //     "wardName": "Phường 2",
  //     "districtName": "Quận 11",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.75824,106.645235\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "78 Đường số 4, Phường Tân Kiểng, Q7, TPHCM",
  //     "id": "20124000",
  //     "locationId": 20124000,
  //     "locationName": "Bưu cục 78 Đường số 4-Q.7-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1449",
  //       "WARD/20705",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.7469,
  //     "lng": 106.70594,
  //     "wardName": "Phường Tân Kiểng",
  //     "districtName": "Quận 7",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.7469,106.70594\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "187 Nguyễn Thị Thập, Phường Tân Phú, Q7. TPHCM",
  //     "id": "20132000",
  //     "locationId": 20132000,
  //     "locationName": "Bưu Cục 187 Nguyễn Thị Thập-Q.7-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1449",
  //       "WARD/20707",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.73836,
  //     "lng": 106.71888,
  //     "wardName": "Phường Tân Phú",
  //     "districtName": "Quận 7",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.73836,106.71888\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": " E2/34D Thới Hòa, Xã Vĩnh Lộc A, Huyện Bình Chánh, Hồ Chí Minh",
  //     "id": "20197000",
  //     "locationId": 20197000,
  //     "locationName": "Bưu Cục E2/34D Thới Hòa-Bình Chánh-Hồ Chí Minh",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1533",
  //       "WARD/22015",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.829859,
  //     "lng": 106.577396,
  //     "wardName": "Xã Vĩnh Lộc A",
  //     "districtName": "Huyện Bình Chánh",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.829859,106.577396\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "382 Lũy Bán Bích, Hòa Thạnh, Tân Phú, Thành Phố Hồ Chí Minh",
  //     "id": "20246000",
  //     "locationId": 20246000,
  //     "locationName": "Bưu Cục 382 Lũy Bán Bích-Q.Tân Phú-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1456",
  //       "WARD/21502",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.776281705727063,
  //     "lng": 106.6339382689103,
  //     "wardName": "Phường Hòa Thạnh",
  //     "districtName": "Quận Tân Phú",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.776281705727063,106.6339382689103\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "247 Phạm Văn Bạch, Phường 15, Quận Tân Bình, Hồ Chí Minh",
  //     "id": "20332000",
  //     "locationId": 20332000,
  //     "locationName": "Bưu Cục 247 Phạm Văn Bạch-Q.Tân Bình-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1455",
  //       "WARD/21415",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.8188181,
  //     "lng": 106.6376236,
  //     "wardName": "Phường 15",
  //     "districtName": "Quận Tân Bình",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.8188181,106.6376236\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "175 Lý Thái Tổ",
  //     "id": "11112",
  //     "locationId": 11112,
  //     "locationName": "KHO TECH TESTING 11112",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1452",
  //       "WARD/21009",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.7694492,
  //     "lng": 106.663575,
  //     "wardName": "Phường 9",
  //     "districtName": "Quận 10",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.7694492,106.663575\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "175 Lý Thái Tổ",
  //     "id": "11113",
  //     "locationId": 11113,
  //     "locationName": "KHO TECH TESTING 11113",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1452",
  //       "WARD/21009",
  //       "REGION/E",
  //       "STATION"
  //     ],
  //     "email": "",
  //     "lat": 10.7694456,
  //     "lng": 106.6635853,
  //     "wardName": "Phường 9",
  //     "districtName": "Quận 10",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.7694456,106.6635853\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "Số 108 Đường số 13, Khu dân cư ấp 5, Xã Phong Phú, Huyện Bình Chánh, Thành phố Hồ Chí Minh",
  //     "id": "20477000",
  //     "locationId": 20477000,
  //     "locationName": "Bưu Cục 108 Đường Số 13-Bình Chánh-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1533",
  //       "WARD/22010",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.726779,
  //     "lng": 106.6460418,
  //     "wardName": "Xã Phong Phú",
  //     "districtName": "Huyện Bình Chánh",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.726779,106.6460418\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "424 Tên Lửa Phường Bình Trị Đông B, Quận Bình Tân, HCM",
  //     "id": "20481000",
  //     "locationId": 20481000,
  //     "locationName": "Bưu Cục 424 Tên Lửa-Q.Bình Tân-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1458",
  //       "WARD/21908",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.7536888,
  //     "lng": 106.6100775,
  //     "wardName": "Phường Bình Trị Đông B",
  //     "districtName": "Quận Bình Tân",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.7536888,106.6100775\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "Số 10 Đường số 8, KP1, Phường Linh Xuân, Q.Thủ Đức, HCM",
  //     "id": "20519000",
  //     "locationId": 20519000,
  //     "locationName": "Bưu Cục 10 Đường số 8-Q.Thủ Đức-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/3695",
  //       "WARD/90735",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.881968,
  //     "lng": 106.770494,
  //     "wardName": "Phường Linh Xuân",
  //     "districtName": "Thành phố Thủ Đức",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.881968,106.770494\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "D20/4X Võ Văn Vân,  Ấp 4A, Xã Vĩnh Lộc B, Huyện Bình Chánh, Hồ Chí Minh",
  //     "id": "20526000",
  //     "locationId": 20526000,
  //     "locationName": "Bưu Cục D20/4X Võ Văn Vân-Bình Chánh-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1533",
  //       "WARD/22016",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.81135,
  //     "lng": 106.5789163,
  //     "wardName": "Xã Vĩnh Lộc B",
  //     "districtName": "Huyện Bình Chánh",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.81135,106.5789163\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "58 Trương Quốc Dung, Phường 10, Q.Phú Nhuận, TP. HCM",
  //     "id": "20555000",
  //     "locationId": 20555000,
  //     "locationName": "Bưu Cục 58 Trương Quốc Dung-Q.Phú Nhuận-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1457",
  //       "WARD/21709",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.7965103,
  //     "lng": 106.6724583,
  //     "wardName": "Phường 10",
  //     "districtName": "Quận Phú Nhuận",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.7965103,106.6724583\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "629 Quốc Lộ 13, KP3, Phường Hiệp Bình Phước, Quận Thủ Đức, Hồ Chí Minh",
  //     "id": "20556000",
  //     "locationId": 20556000,
  //     "locationName": "Bưu Cục 629 Quốc Lộ 13-Q.Thủ Đức-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/3695",
  //       "WARD/90740",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.854415,
  //     "lng": 106.721726,
  //     "wardName": "Phường Hiệp Bình Phước",
  //     "districtName": "Thành phố Thủ Đức",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.854415,106.721726\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "63A Trần Đình Xu, Phường Cầu Kho, Quận 1, Hồ Chí Minh",
  //     "id": "20565000",
  //     "locationId": 20565000,
  //     "locationName": "Bưu Cục 63A Trần Đình Xu-Q.1-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1442",
  //       "WARD/20103",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.76120374596973,
  //     "lng": 106.69058081255653,
  //     "wardName": "Phường Cầu Kho",
  //     "districtName": "Quận 1",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.76120374596973,106.69058081255653\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": " 16a Lê Hồng Phong, p12, Quận 10\n",
  //     "id": "20576000",
  //     "locationId": 20576000,
  //     "locationName": "Bưu Cục 480F Cao Thắng - Cửu Long-Q.10-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1452",
  //       "WARD/21015",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.77583,
  //     "lng": 106.67049,
  //     "wardName": "Phường 15",
  //     "districtName": "Quận 10",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.77583,106.67049\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "59 Trương Phước Phan, Phường Bình Trị Đông, Quận Bình Tân, Tp.Hồ Chí Minh",
  //     "id": "20585000",
  //     "locationId": 20585000,
  //     "locationName": "Bưu Cục 59 Trương Phước Phan-Q.Bình Tân-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1458",
  //       "WARD/21906",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.770901741261364,
  //     "lng": 106.6139394380444,
  //     "wardName": "Phường Bình Trị Đông",
  //     "districtName": "Quận Bình Tân",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.770901741261364,106.6139394380444\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "71B Gò Dầu, Phường Tân Quý, Quận Tân Phú, Hồ Chí Minh",
  //     "id": "20613000",
  //     "locationId": 20613000,
  //     "locationName": "Bưu Cục 71B Gò Dầu-Q.Tân Phú-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1456",
  //       "WARD/21507",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.79604,
  //     "lng": 106.62664,
  //     "wardName": "Phường Tân Quý",
  //     "districtName": "Quận Tân Phú",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.79604,106.62664\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "16 Trần Nhật Duật, Phường Tân Định, Quận 1, Hồ Chí Minh",
  //     "id": "20642000",
  //     "locationId": 20642000,
  //     "locationName": "Bưu Cục 16 Trần Nhật Duật-Q.1-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1442",
  //       "WARD/20110",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.7934283,
  //     "lng": 106.689539,
  //     "wardName": "Phường Tân Định",
  //     "districtName": "Quận 1",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.7934283,106.689539\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "E8/239A Quốc Lộ 50, Xã Phong Phú, Huyện Bình Chánh, Hồ Chí Minh",
  //     "id": "20647000",
  //     "locationId": 20647000,
  //     "locationName": "Bưu Cục 239A QL50-Bình Chánh-Hồ Chí Minh",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1533",
  //       "WARD/22010",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.70281,
  //     "lng": 106.654728,
  //     "wardName": "Xã Phong Phú",
  //     "districtName": "Huyện Bình Chánh",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.70281,106.654728\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "195B Lý Chính Thắng, Phường Võ Thị Sáu, Quận 3, HCM",
  //     "id": "20747000",
  //     "locationId": 20747000,
  //     "locationName": "Bưu Cục 195B Lý Chính Thắng-Q.3-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1444",
  //       "WARD/20306",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.78058,
  //     "lng": 106.68274,
  //     "wardName": "Phường 6",
  //     "districtName": "Quận 3",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.78058,106.68274\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "F5/9A Trần Văn Giàu, Phường Lê Minh Xuân, Huyện Bình Chánh, Thành phố Hồ Chí Minh",
  //     "id": "20750000",
  //     "locationId": 20750000,
  //     "locationName": "Bưu Cục F5/9A Trần Văn Giàu-Bình Chánh-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1533",
  //       "WARD/22008",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.77352,
  //     "lng": 106.5461,
  //     "wardName": "Xã Lê Minh Xuân",
  //     "districtName": "Huyện Bình Chánh",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.77352,106.5461\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "566 Lạc Long Quân, Phường 5, Quận 11, Hồ Chí Minh",
  //     "id": "20867000",
  //     "locationId": 20867000,
  //     "locationName": "Bưu Cục 566 Lạc Long Quân-Q.11-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1453",
  //       "WARD/21105",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.772371598239552,
  //     "lng": 106.64649354753652,
  //     "wardName": "Phường 5",
  //     "districtName": "Quận 11",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.772371598239552,106.64649354753652\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "274 Cô Bắc, Phường Cô Giang, Quận 1, Hồ Chí Minh",
  //     "id": "20887000",
  //     "locationId": 20887000,
  //     "locationName": "Bưu Cục 274 Cô Bắc-Q.1-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1442",
  //       "WARD/20105",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.76290294047148,
  //     "lng": 106.69231630300365,
  //     "wardName": "Phường Cô Giang",
  //     "districtName": "Quận 1",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.76290294047148,106.69231630300365\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "374 Xô Viết Nghệ Tĩnh, Phường 25, Bình Thạnh, Thành phố Hồ Chí Minh",
  //     "id": "20914000",
  //     "locationId": 20914000,
  //     "locationName": "Bưu Cục 374 Xô Viết Nghệ Tĩnh-Q.Bình Thạnh-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1462",
  //       "WARD/21617",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.8041623,
  //     "lng": 106.7116354,
  //     "wardName": "Phường 25",
  //     "districtName": "Quận Bình Thạnh",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.8041623,106.7116354\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "309 Nguyễn Thị Ngâu, xã Thới Tam Thôn, Huyện Hóc Môn, HCM\n",
  //     "id": "20944000",
  //     "locationId": 20944000,
  //     "locationName": "Bưu Cục 309 Nguyễn Thị Ngâu-Hóc Môn-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1459",
  //       "WARD/22208",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.8989692,
  //     "lng": 106.6120458,
  //     "wardName": "Xã Thới Tam Thôn",
  //     "districtName": "Huyện Hóc Môn",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.8989692,106.6120458\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "27 Nguyễn Xí, Phường 26, Quận Bình Thạnh, Hồ Chí Minh",
  //     "id": "20963000",
  //     "locationId": 20963000,
  //     "locationName": "Bưu Cục 27 Nguyễn Xí-Q.Bình Thạnh-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1462",
  //       "WARD/21618",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.8109821,
  //     "lng": 106.7114281,
  //     "wardName": "Phường 26",
  //     "districtName": "Quận Bình Thạnh",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.8109821,106.7114281\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "20/48A Bờ Bao Tân Thắng, Phường Sơn Kỳ, Quận Tân Phú, Hồ Chí Minh",
  //     "id": "20972000",
  //     "locationId": 20972000,
  //     "locationName": "Bưu Cục 20/48A Bờ Bao Tân Thắng-Q. Tân Phú-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1456",
  //       "WARD/21506",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.8070035,
  //     "lng": 106.6203028,
  //     "wardName": "Phường Sơn Kỳ",
  //     "districtName": "Quận Tân Phú",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.8070035,106.6203028\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "Số 87 đường Thạnh Xuân 21, phường Thạnh Xuân, Quận 12, HCM",
  //     "id": "20974000",
  //     "locationId": 20974000,
  //     "locationName": "Bưu Cục 87 Thạnh Xuân 21-Q.12-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1454",
  //       "WARD/21209",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.866099077343664,
  //     "lng": 106.67147039920307,
  //     "wardName": "Phường Thạnh Xuân",
  //     "districtName": "Quận 12",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.866099077343664,106.67147039920307\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "244/23 Dương Đình Hội, Phường Tăng Nhơn Phú B, Quận 9, Hồ Chí Minh",
  //     "id": "20981000",
  //     "locationId": 20981000,
  //     "locationName": "Bưu Cục 244/23 Dương Đình Hội-Q.9-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1451",
  //       "WARD/20912",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.8274583,
  //     "lng": 106.7826853,
  //     "wardName": "Phường Tăng Nhơn Phú B",
  //     "districtName": "Quận 9",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.8274583,106.7826853\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "20 Đường số 81, Tân Quy, Q.7 - HCM",
  //     "id": "21001000",
  //     "locationId": 21001000,
  //     "locationName": "Bưu Cục 20 Đường số 81-Q.7-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1449",
  //       "WARD/20708",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.739959,
  //     "lng": 106.707464,
  //     "wardName": "Phường Tân Quy",
  //     "districtName": "Quận 7",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.739959,106.707464\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "88/21 Phan Sào Nam, P.11, Q. Tân Bình, TP. HCM",
  //     "id": "21018000",
  //     "locationId": 21018000,
  //     "locationName": "Bưu Cục 88/21 Phan Sào Nam-Q.Tân Bình-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1455",
  //       "WARD/21411",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.7879094,
  //     "lng": 106.6444315,
  //     "wardName": "Phường 11",
  //     "districtName": "Quận Tân Bình",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.7879094,106.6444315\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "106/3A Ấp Tây Lân, xã Bà Điểm, huyện Hóc Môn, TP. HCM",
  //     "id": "21066000",
  //     "locationId": 21066000,
  //     "locationName": "Bưu Cục 106/3A Tây Lân-Hóc Môn-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1459",
  //       "WARD/22202",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.844917,
  //     "lng": 106.597354,
  //     "wardName": "Xã Bà Điểm",
  //     "districtName": "Huyện Hóc Môn",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.844917,106.597354\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "02 Đường Số 28, xã Tân Thông Hội, huyện Củ Chi, TP. Hồ Chí Minh",
  //     "id": "21099000",
  //     "locationId": 21099000,
  //     "locationName": "Bưu Cục 02 Đường Số 28 - Củ Chi - HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1460",
  //       "WARD/22117",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.955990133638258,
  //     "lng": 106.51383974832865,
  //     "wardName": "Xã Tân Thông Hội",
  //     "districtName": "Huyện Củ Chi",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.955990133638258,106.51383974832865\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "7/28 Thành Thái",
  //     "id": "22222001",
  //     "locationId": 22222001,
  //     "locationName": "Kho lấy hàng Ahamove HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1452",
  //       "WARD/21014"
  //     ],
  //     "email": "",
  //     "lat": 1,
  //     "lng": 1,
  //     "wardName": "Phường 14",
  //     "districtName": "Quận 10",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=1,1\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "7/28 Thành Thái",
  //     "id": "22222002",
  //     "locationId": 22222002,
  //     "locationName": "Kho giao hàng Ahamove HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1452",
  //       "WARD/21014"
  //     ],
  //     "email": "",
  //     "lat": 1,
  //     "lng": 1,
  //     "wardName": "Phường 14",
  //     "districtName": "Quận 10",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=1,1\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "137/1D Đường XTT 14, Ấp 5 xã Xuân Thới Thượng, huyện Hóc Môn, Thành Phố Hồ Chí Minh",
  //     "id": "21295000",
  //     "locationId": 21295000,
  //     "locationName": "Bưu cục Xuân Thới Thượng-Hóc Môn-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1459",
  //       "WARD/22212",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.868144,
  //     "lng": 106.5628297,
  //     "wardName": "Xã Xuân Thới Thượng",
  //     "districtName": "Huyện Hóc Môn",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.868144,106.5628297\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "20A Đường 12, Phường Long Thạnh Mỹ, Quận 9, Thành Phố Hồ Chí Minh",
  //     "id": "21296000",
  //     "locationId": 21296000,
  //     "locationName": "Bưu cục Long Thạnh Mỹ-Q9-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1451",
  //       "WARD/20904",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.8443023,
  //     "lng": 106.8167691,
  //     "wardName": "Phường Long Thạnh Mỹ",
  //     "districtName": "Quận 9",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.8443023,106.8167691\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "19 Đào Trinh Nhất Linh Tây Thủ Đức HCM",
  //     "id": "21303000",
  //     "locationId": 21303000,
  //     "locationName": "Kho Sort tại điểm Sofia",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/3695",
  //       "WARD/90743",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.8655958,
  //     "lng": 106.75692,
  //     "wardName": "Phường Linh Tây",
  //     "districtName": "Thành phố Thủ Đức",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.8655958,106.75692\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "26/11 Lê Thị Kỉnh Xã Phước Kiển, Huyện Nhà Bè, TPHCM",
  //     "id": "21309000",
  //     "locationId": 21309000,
  //     "locationName": "Bưu Cục Phước Kiển-Nhà Bè-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1534",
  //       "WARD/22306",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.716227,
  //     "lng": 106.701834,
  //     "wardName": "Xã Phước Kiển",
  //     "districtName": "Huyện Nhà Bè",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.716227,106.701834\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "54 Đình Phong Phú, Phường Tăng Nhơn Phú B, Quận 9 (Thành phố Thủ Đức), Thành phố Hồ Chí Minh",
  //     "id": "21311000",
  //     "locationId": 21311000,
  //     "locationName": "Bưu Cục Tăng Nhơn Phú B-Q9-Thủ Đức-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/3695",
  //       "WARD/90756",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.8404179,
  //     "lng": 106.7811479,
  //     "wardName": "Phường Tăng Nhơn Phú B",
  //     "districtName": "Thành phố Thủ Đức",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.8404179,106.7811479\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "352/9F Lê Văn Quới, Bình Hưng Hòa A, Quận Bình Tân, HCM",
  //     "id": "21329000",
  //     "locationId": 21329000,
  //     "locationName": "Bưu Cục Bình Hưng Hoà A-Bình Tân-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1458",
  //       "WARD/21904",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.777404,
  //     "lng": 106.605918,
  //     "wardName": "Phường Bình Hưng Hoà A",
  //     "districtName": "Quận Bình Tân",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.777404,106.605918\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "16A Lê Hồng Phong P12 Q10 ( 480F Cao Thắng)",
  //     "id": "21333000",
  //     "locationId": 21333000,
  //     "locationName": "Bưu Cục Quận 10-HCM02",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1452",
  //       "WARD/21012",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.77561,
  //     "lng": 106.67027,
  //     "wardName": "Phường 12",
  //     "districtName": "Quận 10",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.77561,106.67027\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "119 Nguyễn Văn Luông, Phường 10, Quận 6, TP.HCM",
  //     "id": "1418",
  //     "locationId": 1418,
  //     "locationName": "Bưu Cục 119 Nguyễn Văn Luông-Q.6-HCM",
  //     "parentLocation": [
  //       "REGION/E",
  //       "PROVINCE/202",
  //       "DISTRICT/1448",
  //       "WARD/20610",
  //       "SECTION/EXREG0081S"
  //     ],
  //     "email": "",
  //     "lat": 10.73829,
  //     "lng": 106.63353,
  //     "wardName": "Phường 10",
  //     "districtName": "Quận 6",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.73829,106.63353\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "608 Phan Văn Trị, Phường 7, Quận Gò Vấp, Thành phố Hồ Chí Minh",
  //     "id": "21339000",
  //     "locationId": 21339000,
  //     "locationName": "Bưu Cục 608 Phan Văn Trị-Gò Vấp-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1461",
  //       "WARD/21305",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.8305267,
  //     "lng": 106.678904,
  //     "wardName": "Phường 7",
  //     "districtName": "Quận Gò Vấp",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.8305267,106.678904\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "Thửa đất số 604, tờ bản đồ số 19, Xã Tân Nhựt, Huyện Bình Chánh, TP Hồ Chí Minh\n",
  //     "id": "21348000",
  //     "locationId": 21348000,
  //     "locationName": "Kho Giao Hàng Nặng Tân Nhựt - HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1533",
  //       "WARD/22013"
  //     ],
  //     "email": "",
  //     "lat": 10.718119,
  //     "lng": 106.559054,
  //     "wardName": "Xã Tân Nhựt",
  //     "districtName": "Huyện Bình Chánh",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.718119,106.559054\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "8 đường 1, Phường Long Trường, Quận 9 (Thành phố Thủ Đức), Thành phố Hồ Chí Minh",
  //     "id": "21358000",
  //     "locationId": 21358000,
  //     "locationName": "Bưu Cục Phường Long Trường-Q9-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1451",
  //       "WARD/20905",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.798561,
  //     "lng": 106.809298,
  //     "wardName": "Phường Long Trường",
  //     "districtName": "Quận 9",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.798561,106.809298\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "1440/1 Tỉnh Lộ 10, phường Tân Tạo, quận Bình Tân, TP.HCM",
  //     "id": "21424000",
  //     "locationId": 21424000,
  //     "locationName": "Bưu Cục 1440/1 Tỉnh Lộ 10-Tân Tạo-Bình Tân-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1458",
  //       "WARD/21909",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.7569079,
  //     "lng": 106.5871253,
  //     "wardName": "Phường Tân Tạo",
  //     "districtName": "Quận Bình Tân",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.7569079,106.5871253\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "815/7/1B Hương Lộ 2, phường Bình Trị Đông A, quận Bình Tân, Hồ Chí Minh",
  //     "id": "21428000",
  //     "locationId": 21428000,
  //     "locationName": "Bưu Cục Hương Lộ 2-Bình Trị Đông A-Bình Tân",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1458",
  //       "WARD/21907",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.763988,
  //     "lng": 106.600951,
  //     "wardName": "Phường Bình Trị Đông A",
  //     "districtName": "Quận Bình Tân",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.763988,106.600951\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "390, Nguyễn Kim Cương, Tân Thạnh Đông, huyện Củ Chi, Thành phố Hồ Chí Minh",
  //     "id": "21432000",
  //     "locationId": 21432000,
  //     "locationName": "Bưu Cục 390 Nguyễn Kim Cương-Tân Thạnh Đông-Củ Chi",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1460",
  //       "WARD/22115",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.9718814,
  //     "lng": 106.5742877,
  //     "wardName": "Xã Tân Thạnh Đông",
  //     "districtName": "Huyện Củ Chi",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.9718814,106.5742877\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": " 85/33 Đường Dương Thị Mười, phường Tân Chánh Hiệp, Quận 12, Hồ Chí Minh",
  //     "id": "21437000",
  //     "locationId": 21437000,
  //     "locationName": "Bưu Cục 85/33 Đường Dương Thị Mười-Tân Chánh Hiệp-Quận 12-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1454",
  //       "WARD/21204",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.8601545,
  //     "lng": 106.6286945,
  //     "wardName": "Phường Tân Chánh Hiệp",
  //     "districtName": "Quận 12",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.8601545,106.6286945\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "7/28 Thành Thái  Hồ Chí Minh  Quận 10  ",
  //     "id": "21444000",
  //     "locationId": 21444000,
  //     "locationName": "TĐ GHN",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1452",
  //       "WARD/21014",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.7695371,
  //     "lng": 106.6636191,
  //     "wardName": "Phường 14",
  //     "districtName": "Quận 10",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.7695371,106.6636191\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "53A2 Đường 5, Phường Linh Tây, Quận Thủ Đức, Hồ Chí Minh",
  //     "id": "21460000",
  //     "locationId": 21460000,
  //     "locationName": "Bưu Cục 53A2 Đường 5-Linh Tây-Thủ Đức-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1463",
  //       "WARD/21807",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.8575843,
  //     "lng": 106.7524225,
  //     "wardName": "Phường Linh Tây",
  //     "districtName": "Quận Thủ Đức",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.8575843,106.7524225\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "Cụm 5,1 Đường M12 Khu Công Nghiệp Tân Bình Mở Rộng Phường Bình Hưng Hòa Quận Bình Tân , Thành Phố Hồ Chí Minh\n",
  //     "id": "21466000",
  //     "locationId": 21466000,
  //     "locationName": "Đang giao hàng KTC20",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1458",
  //       "WARD/21904"
  //     ],
  //     "email": "",
  //     "lat": 10.817912,
  //     "lng": 106.608995,
  //     "wardName": "Phường Bình Hưng Hoà A",
  //     "districtName": "Quận Bình Tân",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.817912,106.608995\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "602/26 Điện Biên Phủ, Phường 12, Quận Bình Thạnh, TP Hồ Chí Minh, Vùng HCM",
  //     "id": "21471000",
  //     "locationId": 21471000,
  //     "locationName": "Bưu Cục 602/26 Điện Biên Phủ-Phường 12-Bình Thạnh-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1462",
  //       "WARD/21608",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.798753,
  //     "lng": 106.717749,
  //     "wardName": "Phường 12",
  //     "districtName": "Quận Bình Thạnh",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.798753,106.717749\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "A5 Khu dân cư Tân Thuận Nam, Phường Phú Thuận, Quận 7, Thành phố Hồ Chí Minh",
  //     "id": "21485000",
  //     "locationId": 21485000,
  //     "locationName": "Bưu Cục A5 KDC Tân Thuận Nam-Phú Thuận-Quận 7-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1449",
  //       "WARD/20703",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.731864,
  //     "lng": 106.734318,
  //     "wardName": "Phường Phú Thuận",
  //     "districtName": "Quận 7",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.731864,106.734318\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "320 Nguyễn Thị Kiểu, Phường Hiệp Thành, Quận 12, Hồ Chí Minh",
  //     "id": "21486000",
  //     "locationId": 21486000,
  //     "locationName": "Bưu Cục 320 Nguyễn Thị Kiểu-Hiệp Thành-Quận 12-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1454",
  //       "WARD/21203",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.8703625,
  //     "lng": 106.6412307,
  //     "wardName": "Phường Hiệp Thành",
  //     "districtName": "Quận 12",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.8703625,106.6412307\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "78 Nguyễn Minh Hoàng Phường 12 Quận Tân Bình",
  //     "id": "21520000",
  //     "locationId": 21520000,
  //     "locationName": "Bưu Cục 78 Nguyễn Minh Hoàng-Phường 12-Q.Tân Bình-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1455",
  //       "WARD/21412",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.8000235,
  //     "lng": 106.6502202,
  //     "wardName": "Phường 12",
  //     "districtName": "Quận Tân Bình",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.8000235,106.6502202\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "173-175 Đường Số 11,Phường Bình Hưng Hòa,Quận Bình Tân,TP HCM",
  //     "id": "21531000",
  //     "locationId": 21531000,
  //     "locationName": "Bưu Cục 173-175 Đường Số 11-Bình Hưng Hòa-Bình Tân-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1458",
  //       "WARD/21903",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.801047,
  //     "lng": 106.603437,
  //     "wardName": "Phường Bình Hưng Hòa",
  //     "districtName": "Quận Bình Tân",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.801047,106.603437\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "46 đường Tam Bình, Phường Hiệp Bình Chánh, Quận Thủ Đức, TP.HCM",
  //     "id": "21541000",
  //     "locationId": 21541000,
  //     "locationName": "Bưu Cục 46 Tam Bình-Hiệp Bình Chánh-Thủ Đức-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1463",
  //       "WARD/21803",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.849219,
  //     "lng": 106.729361,
  //     "wardName": "Phường Hiệp Bình Chánh",
  //     "districtName": "Quận Thủ Đức",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.849219,106.729361\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "789 Huỳnh Tấn Phát, P. Phú Thuận, Quận 7, TP. Hồ Chí Minh",
  //     "id": "21544000",
  //     "locationId": 21544000,
  //     "locationName": "Kho GXT HCM-Ahamove-Đang Giao Hàng",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1449",
  //       "WARD/20703",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.733652843205254,
  //     "lng": 106.73113637596029,
  //     "wardName": "Phường Phú Thuận",
  //     "districtName": "Quận 7",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.733652843205254,106.73113637596029\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "47 Đường 882, Khu phố 9, Phường Phú Hữu, Thành phố Thủ Đức",
  //     "id": "21574000",
  //     "locationId": 21574000,
  //     "locationName": "Bưu Cục 47 Đường 882-Phú Hữu-Thủ Đức-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/3695",
  //       "WARD/90763",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.7874228,
  //     "lng": 106.798174,
  //     "wardName": "Phường Phú Hữu",
  //     "districtName": "Thành phố Thủ Đức",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.7874228,106.798174\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "117/2D2 Hồ Văn Long, Tân Tạo, Bình Tân, HCM",
  //     "id": "21606000",
  //     "locationId": 21606000,
  //     "locationName": "Kho Giao Hàng Nặng Tân Tạo-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1458",
  //       "WARD/21909"
  //     ],
  //     "email": "",
  //     "lat": 10.767098411483556,
  //     "lng": 106.5829636841834,
  //     "wardName": "Phường Tân Tạo",
  //     "districtName": "Quận Bình Tân",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.767098411483556,106.5829636841834\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "Khu Công Nghệ Cao, kho Tranximex Quận 9, HCM. ",
  //     "id": "21607000",
  //     "locationId": 21607000,
  //     "locationName": "Bưu cục FTL Nextco Q9-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1451",
  //       "WARD/20909"
  //     ],
  //     "email": "",
  //     "lat": 10.8210833,
  //     "lng": 106.7950278,
  //     "wardName": "Phường Phước Long B",
  //     "districtName": "Quận 9",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.8210833,106.7950278\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "154 QL1, P. Bình Hưng Hòa B, Bình Tân, HCM",
  //     "id": "21609000",
  //     "locationId": 21609000,
  //     "locationName": "Bưu cục FTL Nextco Bình Tân-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1458",
  //       "WARD/21905"
  //     ],
  //     "email": "",
  //     "lat": 10.8185,
  //     "lng": 106.6014722,
  //     "wardName": "Phường Bình Hưng Hoà B",
  //     "districtName": "Quận Bình Tân",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.8185,106.6014722\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": "116A Bà Hom, Phường 13, Quận 6, Hồ Chí Minh",
  //     "id": "21627000",
  //     "locationId": 21627000,
  //     "locationName": "Bưu Cục 116A Bà Hom-Phường 13-Quận 6-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1448",
  //       "WARD/20613",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.75545,
  //     "lng": 106.62833,
  //     "wardName": "Phường 13",
  //     "districtName": "Quận 6",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.75545,106.62833\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   },
  //   {
  //     "address": " C1/7 Lại Hùng Cường, Xã Vĩnh Lộc B, Huyện Bình Chánh, Thành phố Hồ Chí Minh",
  //     "id": "21640000",
  //     "locationId": 21640000,
  //     "locationName": "Bưu Cục C1/7 Lại Hùng Cường-Vĩnh Lộc B-Bình Chánh-HCM",
  //     "parentLocation": [
  //       "PROVINCE/202",
  //       "DISTRICT/1533",
  //       "WARD/22016",
  //       "REGION/E"
  //     ],
  //     "email": "",
  //     "lat": 10.7972109,
  //     "lng": 106.5649937,
  //     "wardName": "Xã Vĩnh Lộc B",
  //     "districtName": "Huyện Bình Chánh",
  //     "provinceName": "Hồ Chí Minh",
  //     "iframeMap": "\u003ciframe width=600 height=400 style=border:0 loading=lazy allowfullscreen src='https://maps.google.com/maps?q=10.7972109,106.5649937\u0026amp;t=\u0026amp;z=14\u0026amp;ie=UTF8\u0026amp;iwloc=B\u0026amp;output=embed'\u003e\u003c/iframe\u003e"
  //   }
  // ];

  return (
    <div className="flex">
      <div className="w-full h-screen">
        <Map center={{ lng: 106.6087319, lat: 10.8175212 }} locations={locations} />
      </div>

      <div className="w-1/4">
      </div>
    </div>
  );
};

export default HomePage;

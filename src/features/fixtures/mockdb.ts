export const db = [
  {
    id: 1,
    from: { lat: 59.3293, lng: 18.0686, name: "Stockholm C" },
    to: { lat: 59.3642, lng: 17.9739, name: "Sundbyberg" },
    publicTransitTime: 15,
    carTime: 12,
  },
  {
    id: 2,
    from: { lat: 59.3293, lng: 18.0686, name: "Stockholm C" },
    to: { lat: 59.3099, lng: 18.0289, name: "Södermalm" },
    publicTransitTime: 20,
    carTime: 10,
  },
];

export const origin = {
  lat: "59.3293",
  lng: "18.0686",
};
export const destination = {
  lat: "59.3378",
  lng: "18.0125",
};
//example trip
export const tripdb = [
  {
    Origin: {
      name: "59.329300, 18.068600",
      type: "ADR",
      id: "A=2@O=59.329300, 18.068600@X=18068600@Y=59329300@",
      lon: 18.0686,
      lat: 59.3293,
      time: "15:53:00",
      date: "2024-11-25",
    },
    Destination: {
      name: "Kungsträdgården T-bana (Stockholm kn)",
      type: "ST",
      id: "A=1@O=Kungsträdgården T-bana (Stockholm kn)@X=18073298@Y=59330783@U=1@L=740021659@",
      extId: "740021659",
      lon: 18.073298,
      lat: 59.330783,
      time: "15:59:00",
      date: "2024-11-25",
      minimumChangeDuration: "PT10M",
    },
    GisRef: {
      ref: "G|1|G@F|A=2@O=59.329300, 18.068600@X=18068600@Y=59329300@a=128@|A=1@O=Kungsträdgården T-bana (Stockholm kn)@L=740021659@a=128@|25112024|155300|155900|bf|ft@0@2000@120@1@100@1@0@0@@@@@false@0@-1@0@-1@-1@$f@$f@$f@$f@$f@$§bt@0@2000@120@1@100@1@0@0@@@@@false@0@-1@0@-1@-1@$f@$f@$f@$f@$f@$§tt@0@5000@120@1@100@1@0@0@@@@@false@0@-1@0@-1@-1@$f@$f@$f@$f@$f@$§||||",
    },
    GisRoute: { dist: 458, durS: "PT6M", dirGeo: 0 },
    Product: [[Object]],
    id: "0",
    idx: 0,
    name: "Promenad",
    type: "WALK",
    duration: "PT6M",
    dist: 458,
  },
  {
    Origin: {
      name: "Kungsträdgården T-bana (Stockholm kn)",
      type: "ST",
      id: "A=1@O=Kungsträdgården T-bana (Stockholm kn)@X=18073298@Y=59330783@U=1@L=740021659@",
      extId: "740021659",
      lon: 18.073298,
      lat: 59.330783,
      routeIdx: 0,
      prognosisType: "PROGNOSED",
      time: "15:59:00",
      date: "2024-11-25",
      minimumChangeDuration: "PT10M",
    },
    Destination: {
      name: "Stadshagen T-bana (Stockholm kn)",
      type: "ST",
      id: "A=1@O=Stadshagen T-bana (Stockholm kn)@X=18017322@Y=59336959@U=1@L=740021662@",
      extId: "740021662",
      lon: 18.017322,
      lat: 59.336959,
      routeIdx: 4,
      prognosisType: "PROGNOSED",
      time: "16:05:00",
      date: "2024-11-25",
      minimumChangeDuration: "PT5M",
    },
    Notes: { Note: [Array] },
    JourneyDetailRef: { ref: "1|117442|3|1|25112024" },
    JourneyStatus: "P",
    Product: [[Object], [Object]],
    JourneyDetail: {
      ref: "1|117442|3|1|25112024",
      dayOfOperation: "2024-11-25",
    },
    id: "1",
    idx: 1,
    name: "Länstrafik -Tunnelbana 11",
    number: "11",
    category: "ULT",
    type: "JNY",
    reachable: true,
    waitingState: "UNDEF",
    direction: "Akalla T-bana (Stockholm kn)",
    directionFlag: "1",
    duration: "PT6M",
    minimumChangeDuration: "PT7M",
  },
  {
    Origin: {
      name: "Stadshagen T-bana (Stockholm kn)",
      type: "ST",
      id: "A=1@O=Stadshagen T-bana (Stockholm kn)@X=18017322@Y=59336959@U=1@L=740021662@",
      extId: "740021662",
      lon: 18.017322,
      lat: 59.336959,
      time: "16:05:00",
      date: "2024-11-25",
      minimumChangeDuration: "PT5M",
    },
    Destination: {
      name: "59.337800, 18.012500",
      type: "ADR",
      id: "A=2@O=59.337800, 18.012500@X=18012500@Y=59337800@",
      lon: 18.0125,
      lat: 59.3378,
      time: "16:12:00",
      date: "2024-11-25",
    },
    GisRef: {
      ref: "G|1|G@F|A=1@O=Stadshagen T-bana (Stockholm kn)@L=740021662@a=128@|A=2@O=59.337800, 18.012500@X=18012500@Y=59337800@a=128@|25112024|160500|161200|fb|ft@0@2000@120@1@100@1@0@0@@@@@false@0@-1@0@-1@-1@$f@$f@$f@$f@$f@$§bt@0@2000@120@1@100@1@0@0@@@@@false@0@-1@0@-1@-1@$f@$f@$f@$f@$f@$§tt@0@5000@120@1@100@1@0@0@@@@@false@0@-1@0@-1@-1@$f@$f@$f@$f@$f@$§||||",
    },
    GisRoute: { dist: 420, durS: "PT7M", dirGeo: 0 },
    Product: [[Object]],
    id: "2",
    idx: 2,
    name: "Promenad",
    type: "WALK",
    duration: "PT7M",
    dist: 420,
  },
];

export const osrmResponse = {
  code: "Ok",
  routes: [
    {
      geometry:
        "ijeiJgsdmBzH{HrDnU`X}VjBwGnA~FnQqRw@kFlRuPfB|CxBoArJiUrHyLz\\cPd@wAi@gAsDfAq@~j@v@lHD|Uf@v@xEJxGcDbDtg@oBtAfGcCm@G",
      legs: [
        {
          steps: [],
          summary: "",
          weight: 664.6,
          duration: 664.6,
          distance: 4997.1,
        },
      ],
      weight_name: "routability",
      weight: 664.6,
      duration: 664.6,
      distance: 4997.1,
    },
  ],
  waypoints: [
    {
      hint: "VKSNg____38HAAAALgAAABAAAAAQAAAAuk-bQIIkzUEkIitBCIgpQQcAAAAuAAAAEAAAABAAAACCDAEAp3ATARJ_iQOAcBMBCH-JAwEAnwmucYBv",
      distance: 2.484167333,
      name: "Norrtullsgatan",
      location: [18.051239, 59.34261],
    },
    {
      hint: "G0nxg____38YAAAATwAAAAwAAAAvAAAATrWDQT25D0Jy9ARBroGPQRgAAABPAAAADAAAAC8AAACCDAEAU28TAZcaiQO4bxMBpBqJAwEAnxWucYBv",
      distance: 5.929772208,
      name: "Ringvägen",
      location: [18.050899, 59.316887],
    },
  ],
};

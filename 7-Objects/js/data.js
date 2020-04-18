let nearestOfficeData=[
    "CLIFTON",
    "DHA",
    "GULSHAN",
    "SADDAR",
    "BHADURABAD",
    "P.E.C.H.S"
]
let relocate=[
    "Pakistan",
    "Afghanistan",
    "Bhutan",
    "Indonesia",
    "Japan",
    "Malaysia",
    "Philippines",
    "Vietnam"
]
let countries=[
    "Pakistan",
    "Afghanistan",
    "Bhutan",
    "Indonesia",
    "Japan",
    "Malaysia",
    "Philippines",
    "Vietnam"
]
let companies=[
    "ABC",
    "XYZ",
    "HIJ",
    "LMN",
    "OPQ",
    "RST"
]


for(let i=0;i<nearestOfficeData.length;i++){
  let option = document.createElement("option");
  option.text = nearestOfficeData[i]  ;
  nearOff.add(option);
}
for(let i=0;i<relocate.length;i++){
  let option = document.createElement("option");
  option.text = relocate[i]  ;
  rel.add(option);
}
for(let i=0;i<countries.length;i++){
  let option = document.createElement("option");
  option.text = countries[i]  ;
  count.add(option);
}
for(let i=0;i<relocate.length;i++){
  let option = document.createElement("option");
  option.text = relocate[i]  ;
  rel2.add(option);
}
for(let i=0;i<companies.length;i++){
  let option = document.createElement("option");
  option.text = companies[i]  ;
  com.add(option);
}


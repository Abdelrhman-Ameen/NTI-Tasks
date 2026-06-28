class patient{
    constructor(name,severity,hasData,Condition){this.name=name;this.severity=severity;this.Condition=Condition;this.hasData=hasData;}
}
let p1 = new patient("Ahmed", 4, true, "critical");
let p2 = new patient("Omar", 5, false, "critical");
let p3 = new patient("Alaa", 1, true, "normal");
let p4 = new patient("Esraa", 2, false, "normal");
let p5 = new patient("Mona", 5, true, "normal");
let p6 = new patient("Youssef", 3, true, "critical");
let p7 = new patient("Salma", 4, true, "normal");
let arr=[p1,p2,p3,p4,p5,p6,p7];
let treatedImmediately=[]
let normalTreated=[]
for (let i=0;i<arr.length;i++){
    if (arr[i].Condition=="critical"){treatedImmediately.push(arr[i]);}
    else {normalTreated.push(arr[i]);}
}
normalTreated.sort((a,b)=>b.severity-a.severity);
console.log("Treated Immediately:");
console.log(treatedImmediately);

console.log("Normal Treated:");
console.log(normalTreated);
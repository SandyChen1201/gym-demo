const UserNameEL = document.querySelector("#username")
const UserWeightEL = document.querySelector("#weight")
const UserHightEL = document.querySelector("#hight")

//console.log(UserNameEL, UserWeightEL, UserHightEL);輸出式子檢查

console.log(GetBMI(UserWeightEL.value, UserHightEL.value));

function GetBMI(weight, hight) {
    let bmi = weight / (hight / 100) ** 2
    if (isNaN(bmi)) {
        return "非數值";
    }
    return bmi
}

function ClickBMI() {
    let weight = UserWeightEL.value;
    let hight = UserHightEL.value;
    let bmi = GetBMI(weight, hight)
    if (weight == "" || hight == "") {
        alert("不可為空值")
    }
    console.log(bmi);
    BMIEL.innerHTML = "BMI=" + bmi.toFixed(2)

    //
    if (bmi < 18.5) {
        resultBMI = "過輕"
    } else if (bmi < 24) {
        resultBMI = "正常範圍"
    } else if (bmi < 27) {
        resultBMI = "過重"
    } else if (bmi < 30) {
        resultBMI = "輕度肥胖"
    } else if (bmi < 35) {
        resultBMI = "中度肥胖"
    } else {
        resultBMI = "重度肥胖"
    }
    ResultEL.innerHTML = resultBMI
}
const BMIEL = document.querySelector("#bmi");
console.log(BMIEL);
const ResultEL = document.querySelector("#comment");
console.log(ResultEL);
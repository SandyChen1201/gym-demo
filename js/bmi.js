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
}
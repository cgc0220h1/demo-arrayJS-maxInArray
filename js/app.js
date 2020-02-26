function maxInArray() {
    let demoArr = [-3, 5, 1, 3, 2, 10];
    let max = demoArr[0];
    let index = 0;
    for (index; index < demoArr.length; index++) {
        if (max < demoArr[index]) {
            max = demoArr[index];
        }
    }
    alert("Giá trị lớn nhất trong mảng là phần tử thứ: " +
        demoArr.indexOf(max) + " và có giá trị là: " + max)
    //Có thể gán biến location = index khi tìm ra số lớn nhất trong câu lệnh if
}

function parse(){
    var nums = document.getElementById("five").value;
    var lucky = document.getElementById("lucky").value;
    nums = nums + " " + lucky;   // puts all six numbers together

    var arr = [];
    var num = -1;
    for (var i = 0; i < 6; i++){
        num = parseInt(nums);
        if (i < 5){
            var space = nums.indexOf(' ');
            nums = nums.substring(space + 1);
        }
        arr.push(num);
    }
    selectionSort(arr);
    lottery(arr, lucky); // passes in the user's array and begins the lottery
}

function lottery(userArr, userLucky){ 
    var lucky; 
    var randomArray = generateRandomArr(lucky);
    var copy = [];

    for (var i = 0; i < 6; i++){
        copy.push(randomArray[i]);
    }

    selectionSort(randomArray);
    document.write('<link rel="stylesheet" href="quickPickResult.css">');
    //passes in two arrays and lucky numbers to determine the result
    compare(randomArray, userArr, userLucky, lucky);
    document.write("<br />");
    document.write("Before sorting, random numbers are ")
    for (prop in copy){
        document.write(copy[prop] + " ");
    }
    document.write("<br />")
    document.write("After sorting, random numbers are ")
    for (prop in randomArray){
        document.write(randomArray[prop] + " ")
    }
    document.write("<br />")
    document.write("Your numbers are ")
    for (prop in userArr){
        document.write(userArr[prop] + " ")
    }
}

function compare(random, user, userLucky, lucky){
    var sameLucky = false;
    if (userLucky == lucky)
        sameLucky = true;
    var count = 0;
    for (var i = 0; i < 6; i++){
        for (var j = 0; j < 6; j++){
            if (random[i] == user[j]){
                count++;
                break;
            }
        }
    }
    var prize = determine(count, sameLucky);
    document.write("You won " + prize);
}

function determine(count, sameLucky){
    var prize = "";
    if (sameLucky){
        if (count == 5)
            prize = "$7,000 a WEEK for LIFE";
        else if (count == 4)
            prize = "$5000";
        else if (count == 3)
            prize = "$150";
        else if (count == 2)
            prize = "$25";
        else if (count == 1)
            prize = "$6";
        else
            prize = "$4";
    }
    else{
        if (count == 5)
            prize = "$25,000 a YEAR for LIFE";
        else if (count == 4)
            prize = "$200";
        else if (count == 3)
            prize = "$20";
        else if (count == 2)
            prize = "$3";
        else
            prize = "nothing";
    }
    return prize;
}


function generateRandomArr(lucky){
    var randomArray = [];
    var randomNum;

    for (var i = 0; i < 5; i++){
        randomNum  = getRandomInt(48, 1);  // random value from 1 to 48
        randomArray.push(randomNum);
    }
    randomNum = getRandomInt(18, 1);       // random value from 1 to 18
    lucky = randomNum;     // stores the randomly generated lucky number
    randomArray.push(randomNum);
    return randomArray;
}

function getRandomInt(max, min){
    var random = Math.floor(Math.random()*(max-min+1)) + 1;
    return random;
}

function selectionSort(arr){
    var i, j;
    var n = 6;
    for (j = 0; j < (n - 1); j++){
        var iMin = j;            // assumption
        for (i = j + 1; i < n; i++){
            if (arr[i] < arr[iMin])
                iMin = i;
        }
        if (iMin != j){          // if there is a smaller num
            swap(arr, j, iMin);
        }
    }
}

function swap(arr, x, y){
    var temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}
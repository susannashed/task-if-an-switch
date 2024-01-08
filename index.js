var result=prompt("what is your exam score?");
if(result<100 && result>=85) {
    document.write("you got an A")
} else if (result<85 && result>=75) {
    document.write("you got a B")
}else if (result<75 && result>=65){
    document.write("you got a c")
}else if (result <65 && result>=50){
    document.write("you got a D")
}else if (result <50 && result>=0){
    document.write("you got F")
}else if (result >100 || result<0){
    document.write("invalid score")
}else if (isNaN(result)){
    document.write("Not a Number")
}else if (result==100){
    document.write("Perfect Score")
}

switch ( result){
    case result<100:
    case result>=85:
        document.write("you got an A")
        break
    case result<85:
    case result>=75:
        document.write("you got a B")
        break
    case result<65:
    case result>=50:
        document.write ("you got a d")
        break
    case result<50:
    case result>=0:
        document.write("you got a f")
        break
    case result<75:
    case result>=65:
        document.write("you got a c")
        break
    case result>100 || result<0:
        document.write("invalid score")
        break
    case isNaN(result):
        document.write("Not a number")
        break
    case result==199:
        document.write("perfect score")
        break

}
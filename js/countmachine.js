var x = 0
function inc()
{
    x++
    if(x == 10)
    {
        x = "ThankYou"
        // document.getElementById("heading").innerHTML = x
    }

    document.getElementById("heading").innerHTML = x
}
function dec()
{
    x--
    // if(x<0)
    // {
    //     x = 0
    // }
    document.getElementById("heading").innerHTML = x   
}
function reset()
{
    x = 0
    document.getElementById("heading").innerHTML = x
}
let dayNumber = parseInt(prompt("Enter no"));
let dayName;

switch(dayNumber){
    case 1:
        dayName = "Monday";
        break;

    case 2:
        dayName = "Tuesday";
        break;

    case 3:
        dayName = "Wednesday";
        break;
        
    case 4:
        dayName ="Thrusday";
        break;
    
    case 5:
        dayName = "Friday";
        break;

    case 6:
        dayName = "Saturday";
        break;

    case 7:
        dayName = "Sunday";
        break;

    default:
        dayName = "Enter number between 1 to 7";
}
let packageType = "overnight"; // standard or express or overnight

switch (packageType) {
    case "standard":
        console.log("Delivery time 3-4 days");
        break;
    case "Express":
        console.log("Delivery time 1-2 days");
        break;
    case "overnight":
        console.log("Delivered next day");
        break;

    default:
        console.log("invalid input");
        break;
}
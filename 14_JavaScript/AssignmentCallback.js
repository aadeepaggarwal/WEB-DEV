function OrderFood(cb) { 
    console.log("Order placed"); 
    setTimeout(() => { 
        console.log("Order confirmed"); 
        cb();
    }, 1000); 
} 
 
function CookFood(item, cb) { 
    console.log("Banana shuru"); 
    setTimeout(() => { 
        console.log("Khana bana diya"); 
        let cookedItem = "cooked" + item; 
        cb(cookedItem);
    }, 2000); 
} 
 
function DeliverFood(cookedItem, cb) { 
    console.log("Delivery shuru"); 
    setTimeout(() => { 
        console.log("Delivered"); 
        let deliveryStatus = cookedItem + "Delivered"; 
        cb(deliveryStatus);
    }, 1500); 
} 

OrderFood(() => {
    CookFood("Pizza", (cookedItem) => {
        DeliverFood(cookedItem, (deliveryStatus) => {
            console.log(deliveryStatus);
        });
    });
});

// q2
function FetchEmail(emailId, cb) { 
    console.log("Fetching email..."); 
    setTimeout(() => { 
        let email = { id: emailId, content: "Hello World" }; 
        cb(email);
    }, 1000); 
} 
 
function ScanForVirus(email, cb) { 
    console.log("Scanning for virus..."); 
    setTimeout(() => { 
        email.scanned = true; 
        cb(email);
    }, 1500); 
} 
 
function MoveToInbox(email, cb) { 
    console.log("Moving to inbox..."); 
    setTimeout(() => { 
        email.location = "inbox"; 
        cb(email);
    }, 1000); 
} 

FetchEmail(101, (email) => {
    ScanForVirus(email, (scannedEmail) => {
        MoveToInbox(scannedEmail, (finalEmail) => {
            console.log("Process Complete:", finalEmail);
        });
    });
});

//q3
function UploadImage(imageName, cb) { 
    console.log("Uploading image..."); 
    setTimeout(() => { 
        let imageUrl = "temp/" + imageName; 
        cb(imageUrl);
    }, 2000); 
} 
 
function ApplyFilter(imageUrl, cb) { 
    console.log("Applying filter..."); 
    setTimeout(() => { 
        let filteredImage = imageUrl.replace('.jpg', '_filtered.jpg'); 
        cb(filteredImage);
    }, 1500); 
} 
 
function SaveToGallery(filteredImage, cb) { 
    console.log("Saving to gallery..."); 
    setTimeout(() => { 
        let finalPath = "gallery/" + filteredImage.split('/').pop(); 
        cb(finalPath);
    }, 1000); 
} 

UploadImage("vacation.jpg", (imageUrl) => {
    ApplyFilter(imageUrl, (filteredImage) => {
        SaveToGallery(filteredImage, (finalPath) => {
            console.log("Image saved at:", finalPath);
        });
    });
});

//q4
function PlaceOrder(productId, cb) { 
    console.log("Placing order..."); 
    setTimeout(() => { 
        let order = { id: productId, status: "placed" }; 
        cb(order);
    }, 1000); 
} 
 
function ProcessPayment(order, cb) { 
    console.log("Processing payment..."); 
    setTimeout(() => { 
        order.status = "paid"; 
        order.transactionId = "TXN" + Date.now(); 
        cb(order);
    }, 2000); 
} 
 
function ShipOrder(order, cb) { 
    console.log("Shipping order..."); 
    setTimeout(() => { 
        order.status = "shipped"; 
        order.trackingId = "TRACK" + Math.random().toString(36).substr(2, 9); 
        cb(order);
    }, 1500); 
} 

PlaceOrder("LAPTOP123", (order) => {
    ProcessPayment(order, (paidOrder) => {
        ShipOrder(paidOrder, (shippedOrder) => {
            console.log("Order Statys:", shippedOrder);
        });
    });
});

//q5
function ReadFile(filename, cb) { 
    console.log("Reading file..."); 
    setTimeout(() => { 
        let data = "Content of " + filename; 
        cb(data);
    }, 1000); 
} 
 
function Encrypt(data, cb) { 
    console.log("Encrypting data..."); 
    setTimeout(() => { 
        let encrypted = btoa(data); // simple encoding 
        cb(encrypted);
    }, 1500); 
} 
 
function BackupToCloud(encryptedData, cb) { 
    console.log("Backing up to cloud..."); 
    setTimeout(() => { 
        let cloudUrl = "cloud://backup/" + Date.now(); 
        cb(cloudUrl);
    }, 2000); 
} 

ReadFile("config.json", (data) => {
    Encrypt(data, (encrypted) => {
        BackupToCloud(encrypted, (cloudUrl) => {
            console.log("Backup ho gaya:", cloudUrl);
        });
    });
});
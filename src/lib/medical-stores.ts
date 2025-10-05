
import type { MedicalStore } from "@/types";

export const medicalStores: MedicalStore[] = [
    {
        "id": "ms1",
        "name": {
            "hi": "महावीर मेडिकल हॉल",
            "en": "Mahavir Medical Hall",
            "bho": "महावीर मेडिकल हॉल"
        },
        "location": "जे.पी. चौक, सीवान",
        "phone": "9876543210",
        "imageUrl": "https://picsum.photos/seed/store1/600/400",
        "aiHint": "pharmacy storefront"
    },
    {
        "id": "ms2",
        "name": {
            "hi": "अपोलो फार्मेसी",
            "en": "Apollo Pharmacy",
            "bho": "अपोलो फार्मेसी"
        },
        "location": "स्टेशन रोड, सीवान",
        "phone": "9123456789",
        "imageUrl": "https://picsum.photos/seed/store2/600/400",
        "aiHint": "pharmacy shop"
    }
];

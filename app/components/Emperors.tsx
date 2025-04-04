'use client';

import EmperorCard from "./EmperorCard";
import {useState, useEffect} from "react";

//URL to the roman emperors API
const API_URL = 'https://documentation-resources.opendatasoft.com/api/explore/v2.1/catalog/datasets/roman-emperors/records?limit=68';

// I decided not to use dynasty prop as it wasn't historically accurate with the inter dynasty periods like the crisis of the 3rd century and the Tetrarchy
interface EmperorProps {
    name: string;
    name_full: string;
    birth: string;
    death: string;
    rise: string;
    reign_start: string;
    reign_end: string;
    cause: string;
    killer: string;
    dynasty: string;
    image: string;
}

export default function Emperors() {
    //states for keeping track of the emperors and current index
    //the data uses index to keep the order of emperors, so i decided to use it instead of date as it was easier
    const [emperors, setEmperors] = useState<EmperorProps[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchEmperors = async () => {
            try {
                //from the api response fill the emperors state with the collected data and order them by their index
                const response = await fetch(API_URL);
                const data = await response.json();
                if(data){
                    const sortedEmperors = data.results.sort((a:any, b:any) => a.index - b.index);
                    setEmperors(sortedEmperors.map((emperor: any) => ({
                        name: emperor.name,
                        name_full: emperor.name_full,
                        birth: emperor.birth,
                        death: emperor.death,
                        rise: emperor.rise,
                        reign_start: emperor.reign_start,
                        reign_end: emperor.reign_end,
                        cause: emperor.cause,
                        killer: emperor.killer,
                        dynasty: emperor.dynasty,
                        image: emperor.image
                    })));
                }else{
                    console.error("Something went wrong fetching the API data");
                }
            }catch(error){
                console.error(error);
            }
        }
        fetchEmperors();
    }, []);

    //prev and next button function handlers
    const handleNext = () => {
        if(currentIndex < emperors.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if(currentIndex > 0){
            setCurrentIndex(currentIndex - 1);
        }
    };

    //Make the next and previous buttons appear next to the emperor card
    return (
        <div className="flex items-center justify-center min-h-screen p-4 space-x-6">
            <button onClick={handlePrev} className="px-4 py-2 rounded text-white bg-blue-600 hover:bg-blue-200 cursor-pointer"> Prev </button>
            <EmperorCard {...emperors[currentIndex]} />
            <button onClick={handleNext} className="px-4 py-2 rounded text-white bg-blue-600 hover:bg-blue-200 cursor-pointer"> Next </button>
        </div>
    )
}
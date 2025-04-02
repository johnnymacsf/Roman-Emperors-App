'use client';

import EmperorCard from "./EmperorCard";
import {useState, useEffect} from "react";

const API_URL = 'https://documentation-resources.opendatasoft.com/api/explore/v2.1/catalog/datasets/roman-emperors/records?limit=68';

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
    const [emperors, setEmperors] = useState<EmperorProps[]>([]);

    useEffect(() => {
        const fetchEmperors = async () => {
            try {
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

    return (
        <div className="flex justify-center items-center min-h-screen p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {emperors.length > 0 ? (
                    emperors.map((emperor, index) => (
                        <EmperorCard key={index} name={emperor.name} name_full={emperor.name_full} birth={emperor.birth} death={emperor.death} rise={emperor.rise} reign_start={emperor.reign_start} reign_end={emperor.reign_end} cause={emperor.cause} dynasty={emperor.dynasty} killer={emperor.killer} image={emperor.image} />
                    ))
                ) : (
                    <p>Loading the list of Roman emperors...</p>
                )}
            </div>
        </div>
    )
}
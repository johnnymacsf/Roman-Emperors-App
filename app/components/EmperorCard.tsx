//Emperor card prop details for which data collected will be displayed, skip birth location and notes
//decided not to actually use the dynasty and era props as they weren't historically accurate
interface EmperorCardProps {
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

const EmperorCard: React.FC<EmperorCardProps> = ({name, name_full, birth, death, rise, reign_start, reign_end, cause, killer, dynasty, image}) => {
    return (
        //First section with the name and image, second section separate from other life details after full name to make it more clear
        <div className="card w-80 h-[850px] p-4 border-4 bg-purple-400 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">{name}</h3>
            <img src={image} alt={name} className="w-full h-auto rounded-lg mb-4 border-4 border-yellow-400" />
            <strong>Full Name:</strong>
            <p>{name_full}</p>
            <hr className="my-3 rounded-md border-t-5 border-yellow-400" />
            <div className="flex justify-center space-x-8">
                <p className="text-yellow-400 text-md">Birth: {birth}</p>
                <p className="text-yellow-400 text-md">Death: {death}</p>
            </div>
            <div className="flex justify-center space-x-8 p-4">
                <p className="text-yellow-400"><strong>Reign Start:</strong> {reign_start}</p>
                <p className="text-yellow-400"><strong>Reign End:</strong> {reign_end}</p>
            </div>
            <strong>Rise to Power</strong>
            <p className="mb-4">{rise}</p>
            <p><strong>Cause of Death:</strong> {cause}</p>
            <p><strong>Killer:</strong> {killer}</p>
        </div>
    );
}

export default EmperorCard;
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
        <div className="card p-4 border-4  bg-purple-400 rounded-lg max-w-xs mx-auto text-center">
            <h3 className="text-2xl font-bold">{name}</h3>
            <img src={image} alt={name} className="w-full h-auto rounded-lg mb-4" />
            <strong>Full Name:</strong>
            <p>{name_full}</p>
            <hr className="my-3 rounded-md border-t-5 border-yellow-400" />
            <div className="flex justify-center space-x-8">
                <p className="text-[#5A3E2B"><strong>Birth:</strong> {birth}</p>
                <p className="text-[#5A3E2B"><strong>Death:</strong> {death}</p>
            </div>
            <strong className="text-lg">Rise to Power:</strong>
            <p>{rise}</p>
            <strong className="text-lg">Reign:</strong>
            <div className="flex justify-center space-x-8">
                <p className="text-[#5A3E2B"><strong>Reign Start:</strong> {reign_start}</p>
                <p className="text-[#5A3E2B"><strong>Reign End:</strong> {reign_end}</p>
            </div>
            <p><strong>Cause of Death:</strong> {cause}</p>
            <p><strong>Killer:</strong> {killer}</p>
        </div>
    );
}

export default EmperorCard;
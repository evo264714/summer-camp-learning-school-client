
const InstructorsCard = ({ ins }) => {
    const { image, name, email } = ins;
    return (
        <div className="card w-96 shadow-xl my-8 bg-success">
            <figure><img className="h-72 w-full" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p>Email: {email}</p>
                <div className="card-actions justify-center mt-4">
                    <button className="btn btn-white">See Classes</button>
                </div>
            </div>
        </div>
    );
};

export default InstructorsCard;



const UserTypesComponent = () => {
    // UserTypes.js
    const userTypes = [
        {
            id: 1,
            type: "Developers",
            benefits: ["Access to coding resources", "Networking with other developers", "Tech updates"],
        },
        {
            id: 2,
            type: "Corporate Professionals",
            benefits: ["Professional networking", "Industry insights", "Skill development"],
        },
        {
            id: 3,
            type: "Bankers",
            benefits: ["Financial news and updates", "Networking with finance professionals", "Training programs"],
        },
        // Add more user types as needed
    ];
    return (
        <div className="container mx-auto mt-8 mb-5 px-3 text-black">
            <h2 className="text-3xl font-semibold mb-4">Who Can Benefit?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {userTypes.map((userType) => (
                    <div key={userType.id} className="bg-white p-4 rounded-md border-2 border-black">
                        <h3 className="text-xl font-semibold mb-2">{userType.type}</h3>
                        <ul>
                            {userType.benefits.map((benefit, index) => (
                                <li key={index} className="text-gray-700 mb-2">
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserTypesComponent;

// UserTypesComponent.css
/* You can add Tailwind CSS classes specific to this component if needed */

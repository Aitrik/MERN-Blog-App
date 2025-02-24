import React from 'react'


const newsItems = [
    {
        id: 1,
        date: "Aug 18",
        title: "Cristiano Ronaldo of Juventus FC looks dejected during the...",
        image: "https://media.gettyimages.com/photos/cristiano-ronaldo-of-juventus-fc-looks-dejected-during-the-uefa-of-picture-id1227967060?k=6&m=1227967060&s=612x612&w=0&h=cMSMlRyI6YAzcE_C2KgHGRLeVojHYoUhIvhwPBYv8f4="
    },
    {
        id: 2,
        date: "Jan 18",
        title: "Barcelona v Bayern Munich",
        image: "https://media.gettyimages.com/photos/lionel-messi-and-marcandre-ter-stegen-of-fc-barcelona-waits-in-the-picture-id1266763488?k=6&m=1266763488&s=612x612&w=0&h=8vxz9HfQVfrff5N7d1lBVxtLamRQGK3J3lyHkUuuIiw="
    },
    {
        id: 3,
        date: "Aug 18",
        title: "Cristiano Ronaldo of Juventus FC looks dejected during the...",
        image: "https://media.gettyimages.com/photos/cristiano-ronaldo-of-juventus-fc-looks-dejected-during-the-uefa-of-picture-id1227967060?k=6&m=1227967060&s=612x612&w=0&h=cMSMlRyI6YAzcE_C2KgHGRLeVojHYoUhIvhwPBYv8f4="
    },
    {
        id: 4,
        date: "July 23",
        title: "Barcelona v Bayern Munich - UEFA Champions League",
        image: "https://media.gettyimages.com/photos/lionel-messi-of-fc-barcelona-looks-dejected-following-his-teams-in-picture-id1266341828?k=6&m=1266341828&s=612x612&w=0&h=FZi-bSrIlOEE01780h79GsbBYPqZo2l3aaCxoktWADY="
    }
];

export default function HomeSection1() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 w-full">
                <div className="sm:col-span-6 lg:col-span-6 relative w-full min-h-[300px] flex flex-col bg-cover bg-center"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1739382121445-19b3460a9e7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8")'
                    }}>
                    {/* Gradient overlay */}
                    <div className="h-full w-full flex flex-col justify-between bg-gradient-to-b from-transparent to-gray-900">
                        {/* Top bar with category and date */}
                        <div className="w-full p-4 flex justify-between items-start">
                            <a href="#"
                                className="text-xs bg-indigo-600 text-white px-4 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500"
                            >
                                Fashion
                            </a>
                            <div className="text-white flex flex-col items-center">
                                <span className="text-2xl sm:text-3xl font-semibold leading-none">22</span>
                                <span className="text-sm mt-1">Feb</span>
                            </div>
                        </div>

                        {/* Main content */}
                        <div className="p-4 sm:p-5">
                            <a href="#"
                                className="block text-lg sm:text-xl tracking-tight font-medium leading-tight text-white hover:underline mb-2"
                            >
                                The perfect summer sweater that you can wear!
                            </a>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Voluptatibus quia, nulla! Maiores et perferendis eaque.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="sm:col-span-6 lg:col-span-6">
                    {newsItems.map((item, index) => (
                        <div key={item.id} className={`flex items-center shadow-lg p-1 border border-gray-300 ${index !== newsItems.length - 1 ? 'mb-3' : ''}`}>
                            <div
                                className="w-20 h-20 flex-shrink-0 bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(${item.image})`
                                }}
                            ></div>
                            <div className="text-sm ml-2 flex-grow overflow-hidden">
                                <p className="text-gray-600 text-xs">{item.date}</p>
                                <a href="#"
                                    className="text-gray-900 font-medium hover:text-indigo-600 leading-tight line-clamp-2"
                                >
                                    {item.title}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

import React from "react";

export default function KeyValue(props) {
    return (
        <section className="justify-center antialiased bg-gray-50 text-gray-600 min-h-screen p-4">
            <div className="max-w-8xl mx-auto bg-indigo-600 shadow-lg rounded-lg">
                <div className="px-6 py-5">
                    <h2 className="text-xl leading-snug font-extrabold text-gray-50 truncate mb-1 sm:mb-0">Key Value Indicator: {props.value}</h2>
                </div>
            </div>
        </section>
    )
}
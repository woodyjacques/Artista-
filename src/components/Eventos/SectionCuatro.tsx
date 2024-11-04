interface SectionTresProps2 {
    title: string;
    subtitle: string;
}

function SectionCuatro({title,subtitle}:SectionTresProps2) {
    return (
        <div className="font-arima text-center my-12">
            <p className="text-red-600 font-semibold text-lg md:text-xl">{title}</p>
            <h2 className="text-3xl md:text-5xl font-bold mt-3">{subtitle}</h2>
        </div>
    );
}

export default SectionCuatro;

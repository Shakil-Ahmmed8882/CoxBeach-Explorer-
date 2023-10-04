

const Hotels = ({hotel}) => {
      const {img,title, description} = hotel;
      return (
            <div className="flex gap-3">
                  <div>
                 <img className="w-[1000px] h-[100%]" src={img} alt="" /> 
                  </div>
                  <div>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p>{description}</p>
                  </div>
            </div>
      );
};

export default Hotels;
import Card from "./card";

export default function RenderCards({ cards }) {
  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {cards
          ? cards.map((obj) => (
              <Card
                text={obj.text}
                heading={obj.heading}
                tag={obj.tags}
                video={obj.video}
              />
            ))
          : ""}
      </div>
    </div>
  );
}

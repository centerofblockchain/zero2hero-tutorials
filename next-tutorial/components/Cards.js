function Cards() {
  return (
    <>
      <Card
        name="NFT#1"
        description="AI generated images of Zero2Hero students"
      />
      <Card
        name="NFT#2"
        description="AI generated images of Zero2Hero students"
      />
      <Card
        name="NFT#3"
        description="AI generated images of Zero2Hero students"
      />
    </>
  );
}

function Card({ name, description }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Cards;

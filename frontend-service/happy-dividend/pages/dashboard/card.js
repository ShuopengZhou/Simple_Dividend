import "tailwindcss/tailwind.css";

function Card(props) {
    return (
        <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold mb-2 text-gray-800">{props.amount}</h2>
            <p class="text-gray-700">This is my cool new card!</p>
        </div>
    )
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const response = await fetch('localhost:8088/getAnnualDividend?email=zsp322@gmail.com&year=2020')
    const result = await res.json();

    console.log(result);
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        amount: result.amount
      },
    }
}
export default Card;
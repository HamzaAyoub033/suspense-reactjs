export default function IndexPage({ navigate }) {
  return (
    <button
      style={{
        display: "block",
        margin: "0 auto",
        backgroundColor: "teal",
        color: "#fff",
        padding: "6px",
        borderRadius: "4px",
        border: "1px solid #fff",
        fontSize: "14px",
      }}
      onClick={() => navigate("/the-beatles")}
    >
      Open The Beatles artist page
    </button>
  );
}

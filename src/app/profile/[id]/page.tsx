export default async function UserProfile({params}: any) {
    const {id} = await params;

  return (
    <div>
      <h1>Profile Page
        <span className="font-bold bg-orange-200 text-black">{id}</span>
      </h1>
    </div>
  );
}

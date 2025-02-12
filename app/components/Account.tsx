export default function Account() {
  // This is a placeholder. You should fetch the actual user data from your backend.
  const user = {
    name: "John Doe",
    email: "john@example.com",
    plan: "Premium",
  }

  return (
    <div className="p-4 rounded-lg bg-purple-900 border-2 border-purple-500 shadow-[0_0_10px_#8B5CF6]">
      <h2 className="text-2xl font-bold mb-4">Account Information</h2>
      <div className="mb-2">
        <strong>Name:</strong> {user.name}
      </div>
      <div className="mb-2">
        <strong>Email:</strong> {user.email}
      </div>
      <div className="mb-2">
        <strong>Plan:</strong> {user.plan}
      </div>
    </div>
  )
}
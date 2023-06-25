import React from "react";
import Founder from "../../assets/founder.webp";
const Users = () => {
    const arr = [1, 2, 3, 4];
  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Photo</th>
              <th>Role</th>
              <th>Since</th>
            </tr>
          </thead>

          <tbody>
            {arr.map((i) => (
              <tr key={i}>
                <td>#sdkfsdfdsf</td>
                <td>prince</td>
                <td>
                    <img src={Founder} alt="Users"/>
                </td>
                <td>Admin</td>
                <td>{"24-2-2023"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  )
}

export default Users
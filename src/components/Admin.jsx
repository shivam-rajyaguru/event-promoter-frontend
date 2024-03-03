import React from "react";

function Admin() {
  return (
    <>
      <header class="bg-blue-500 text-white p-4">
        <h1 class="text-2xl font-semibold">Event Promoter Admin Panel</h1>
      </header>

      <nav class="bg-gray-800 text-white p-4">
        <ul class="flex space-x-4">
          <li>
            <a href="#dashboard" class="hover:text-gray-300">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#users" class="hover:text-gray-300">
              Manage Users
            </a>
          </li>
          <li>
            <a href="#campaigns" class="hover:text-gray-300">
              Manage Campaigns
            </a>
          </li>
          <li>
            <a href="#analytics" class="hover:text-gray-300">
              Analytics
            </a>
          </li>
        </ul>
      </nav>

      <main class="p-4">
        <section id="dashboard" class="mb-8">
          <h2 class="text-xl font-semibold mb-4">Dashboard</h2>
        </section>

        <section id="users" class="mb-8">
          <h2 class="text-xl font-semibold mb-4">Manage Users</h2>
        </section>

        <section id="campaigns" class="mb-8">
          <h2 class="text-xl font-semibold mb-4">Manage Campaigns</h2>
        </section>

        <section id="analytics" class="mb-8">
          <h2 class="text-xl font-semibold mb-4">Analytics</h2>
        </section>
      </main>

      <footer class="bg-gray-800 text-white p-4">
        <p>&copy; 2024 Event Promoter. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Admin;

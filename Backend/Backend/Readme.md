---

## 📦 WPT\_PROJ – Backend

This is the backend for WPT\_PROJ, built with:

* ASP.NET Core (.NET 8)
* Entity Framework Core 8
* Pomelo.EntityFrameworkCore.MySql 8
* MySQL 8.x

---

### ✅ Requirements

* [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
* [MySQL Server 8.x](https://dev.mysql.com/downloads/mysql/)
* [MySQL Workbench (optional)](https://dev.mysql.com/downloads/workbench/)

---

### ⚙️ Setup Instructions

#### 1. **Clone the repo**

```bash
git clone https://github.com/your-username/wpt_proj_backend.git
cd wpt_proj_backend
```

#### 2. **Create and Configure MySQL Database**

* Create a new MySQL database:

```sql
CREATE DATABASE WPT_PROJ_DATABASE CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
```

* OR let EF Core create it automatically (see step 5).

#### 3. **Update Connection String**

In `AppDbContext.cs` or `appsettings.json`, update the connection string:

```csharp
"server=localhost;database=WPT_PROJ_DATABASE;user=root;password=yourpassword"
```

> Replace `root` and `yourpassword` as needed.

---

#### 4. **Install Dependencies**

```bash
dotnet restore
```

#### 5. **Apply Migrations**

Create the database schema:

```bash
dotnet ef database update
```

> If needed:
>
> ```bash
> dotnet ef migrations add InitialCreate
> ```

---

### 🧪 Running the Project

```bash
dotnet run
```

The backend API will start, typically at:

```
https://localhost:5001
http://localhost:5000
```

---

### 📦 NuGet Packages Used

| Package                              | Version |
| ------------------------------------ | ------- |
| Microsoft.EntityFrameworkCore        | 8.0.13  |
| Microsoft.EntityFrameworkCore.Design | 8.0.13  |
| Pomelo.EntityFrameworkCore.MySql     | 8.0.3   |
| Swashbuckle.AspNetCore (for Swagger) | 6.6.2   |

---

### 🧹 Helpful Commands

* Rebuild solution:

  ```bash
  dotnet build
  ```

* Reset migrations (if needed):

  ```bash
  dotnet ef migrations remove
  dotnet ef migrations add InitialCreate
  dotnet ef database update
  ```

---

### 🔐 Environment Variables (Optional)

You can store the connection string in `appsettings.Development.json` or use secrets:

```bash
dotnet user-secrets set "ConnectionStrings:DefaultConnection" "your_connection_string"
```

---


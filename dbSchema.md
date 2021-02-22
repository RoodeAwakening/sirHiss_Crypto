# `Users`

| Column Name      | Data Type | Details               | Description           |
| ---------------- | --------- | --------------------- | --------------------- |
| `id`             | integer   | not null, primary key | Users unique id       |
| `first_name`     | string    | not null              | Users first name      |
| `last_name`      | string    | not null              | Users last name       |
| `email`          | string    | not null, unique      | Users email           |
| `username`       | string    | not null, unique      | Users username        |
| `funds`          | float     | not null, default 0.0 | Users available funds |
| `hashedPassword` | string    | not null              | Users hashed password |
| `createdAt`      | datetime  | not null              | timestamp             |
| `updatedAt`      | datetime  | not null              | timestamp             |

# `WatchLists`

| Column Name     | Data Type | Details               | Description                              |
| --------------- | --------- | --------------------- | ---------------------------------------- |
| `id`            | integer   | not null, primary key | Watchlists unique id                     |
| `user_id`       | integer   | not null, foreign key | User that the watchlist belongs to       |
| `listAssets_id` | integer   | not null, foreign key | Coin that belongs to the users watchlist |
| `createdAt`     | datetime  | not null              | timestamp                                |
| `updatedAt`     | datetime  | not null              | timestamp                                |

# `ListAssets`

| Column Name        | Data Type | Details               | Description            |
| ------------------ | --------- | --------------------- | ---------------------- |
| `id`               | integer   | not null, primary key | ListAssets unique id   |
| `coinCode`         | string    | not null              | Coin code of the asset |
| `coinName`         | string    | not null              | Coin name of the asset |
| `coinLogo`         | string    | not null              | Coin logo of the asset |
| `coinCurrentPrice` | integer   | not null              | Current price of coin  |
| `createdAt`        | datetime  | not null              | timestamp              |
| `updatedAt`        | datetime  | not null              | timestamp              |

# `portfolioAssets`

| Column Name            | Data Type | Details               | Description                |
| ---------------------- | --------- | --------------------- | -------------------------- |
| `id`                   | integer   | not null, primary key | ListAssets unique id       |
| `listAssets_id`        | integer   | not null, foreign key | Coin information           |
| `portfolioHoldings_id` | integer   | not null, foreign key | Users portfolio belongs to |
| `currentPrice`         | integer   | not null              | Current price of coin      |
| `coinCount`            | integer   | not null              | Current ammount of a coin  |
| `createdAt`            | datetime  | not null              | timestamp                  |
| `updatedAt`            | datetime  | not null              | timestamp                  |

# `Transactions`

| Column Name            | Data Type | Details               | Description                              |
| ---------------------- | --------- | --------------------- | ---------------------------------------- |
| `id`                   | integer   | not null, primary key | Transactions unique id                   |
| `user_id`              | integer   | not null, foreign key | User that that transaction belongs to    |
| `listAssets_id`        | integer   | not null, foreign key | Coin information                         |
| `portfolioHoldings_id` | integer   | not null, foreign key | What portfolio does the asset belong to  |
| `price`                | integer   | not null              | Price of the coin at time of transaction |
| `coinCount`            | integer   | not null              | Current ammount of a coin  |
| `transactionType`      | string    | not null              | Buy, Sell, Deposit, Withdraw             |
| `createdAt`            | datetime  | not null              | timestamp                                |
| `updatedAt`            | datetime  | not null              | timestamp                                |

# `PortfolioHoldings`

| Column Name | Data Type | Details               | Description                           |
| ----------- | --------- | --------------------- | ------------------------------------- |
| `id`        | integer   | not null, primary key | PortfolioHoldings unique id           |
| `user_id`   | integer   | not null, foreign key | User that that transaction belongs to |
| `createdAt` | datetime  | not null              | timestamp                             |
| `updatedAt` | datetime  | not null              | timestamp                             |

<br></br>
<img src="frontend/public/images/db_schema.PNG" alt="Schema" width="" height="">

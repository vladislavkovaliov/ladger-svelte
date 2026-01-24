#!/usr/bin/env bash

set -e

echo "📁 Creating SvelteKit project structure..."

# lib/api
mkdir -p src/lib/api
touch \
  src/lib/api/auth.ts \
  src/lib/api/users.ts \
  src/lib/api/payments.ts

# lib/components/ui
mkdir -p src/lib/components/ui
touch \
  src/lib/components/ui/Button.svelte \
  src/lib/components/ui/Input.svelte \
  src/lib/components/ui/Modal.svelte \
  src/lib/components/ui/Table.svelte

# lib/components/auth
mkdir -p src/lib/components/auth
touch \
  src/lib/components/auth/LoginForm.svelte \
  src/lib/components/auth/RegisterForm.svelte

# lib/components/users
mkdir -p src/lib/components/users
touch src/lib/components/users/UsersTable.svelte

# lib/components/payments
mkdir -p src/lib/components/payments
touch \
  src/lib/components/payments/PaymentForm.svelte \
  src/lib/components/payments/PaymentsTable.svelte

# lib/stores
mkdir -p src/lib/stores
touch \
  src/lib/stores/auth.store.ts \
  src/lib/stores/user.store.ts

# lib/types
mkdir -p src/lib/types
touch \
  src/lib/types/user.ts \
  src/lib/types/payment.ts

# lib/utils
mkdir -p src/lib/utils
touch \
  src/lib/utils/fetcher.ts \
  src/lib/utils/guards.ts

# routes
mkdir -p src/routes

touch \
  src/routes/+layout.svelte \
  src/routes/+layout.ts

# auth pages
mkdir -p src/routes/login
touch src/routes/login/+page.svelte

mkdir -p src/routes/register
touch src/routes/register/+page.svelte

# admin users
mkdir -p src/routes/admin/users
touch src/routes/admin/users/+page.svelte

# payments
mkdir -p src/routes/payments/new
mkdir -p src/routes/payments/[id]

touch \
  src/routes/payments/+page.svelte \
  src/routes/payments/new/+page.svelte \
  src/routes/payments/[id]/+page.svelte

# app.css
touch src/app.css

echo "✅ Structure created successfully!"

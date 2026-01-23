---
name: typescript
description: >
  Patrones estrictos de TypeScript y mejores prácticas.
  Usar cuando: Se definan tipos, interfaces, genéricos, const maps, type guards, o se elimine any.
license: MIT
metadata:
  author: allia-studio
  version: "1.0"
  scope: [root]
  auto_invoke: "Al definir tipos o interfaces"
allowed-tools: Read, Edit, Write, Glob, Grep, Bash, WebFetch, WebSearch, Task
---

## Const Types (OBLIGATORIO)

```typescript
// ✅ SIEMPRE: Crear objeto const primero, luego extraer el tipo
const STATUS = {
  ACTIVE: "active",
  INACTIVE: "inactive",
  PENDING: "pending",
} as const;

type Status = (typeof STATUS)[keyof typeof STATUS];
// Resultado: "active" | "inactive" | "pending"

// ❌ NUNCA: Union types directos
type Status = "active" | "inactive" | "pending";
```

**¿Por qué?** Centraliza el valor y el tipo, disponible en runtime, mejor autocompletado, refactoring más fácil.

## Interfaces sin Anidamiento (OBLIGATORIO)

```typescript
// ✅ SIEMPRE: Un nivel de profundidad, objetos anidados → interface separada
interface UserAddress {
  street: string;
  city: string;
  postalCode: string;
}

interface User {
  id: string;
  name: string;
  address: UserAddress;  // Referencia, no inline
}

// ✅ Extensión para variantes
interface Admin extends User {
  permissions: string[];
}

// ❌ NUNCA: Objetos anidados inline
interface User {
  address: { street: string; city: string };  // NO
}
```

## Nunca Usar `any`

```typescript
// ✅ Usar unknown para tipos desconocidos
function parseData(input: unknown): User {
  if (isUser(input)) return input;
  throw new Error("Invalid data");
}

// ✅ Usar genéricos para tipos flexibles
function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

// ❌ NUNCA
function parseData(input: any): any { }
```

## Type Guards

```typescript
// ✅ Type guard con type predicate
function isUser(value: unknown): value is User {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    "name" in value
  );
}

// Uso
function process(data: unknown) {
  if (isUser(data)) {
    console.log(data.name);  // TypeScript sabe que es User
  }
}
```

## Discriminated Unions

```typescript
// ✅ Para estados o variantes con propiedades diferentes
interface LoadingState {
  type: "loading";
}

interface SuccessState<T> {
  type: "success";
  data: T;
}

interface ErrorState {
  type: "error";
  message: string;
}

type AsyncState<T> = LoadingState | SuccessState<T> | ErrorState;

// Uso: TypeScript infiere el tipo correcto
function render(state: AsyncState<User[]>) {
  switch (state.type) {
    case "loading":
      return <Spinner />;
    case "success":
      return <List data={state.data} />;  // data es User[]
    case "error":
      return <Error message={state.message} />;
  }
}
```

## Utility Types

```typescript
// Selección y omisión
Pick<User, "id" | "name">     // Solo id y name
Omit<User, "id">              // Todo excepto id

// Opcionalidad
Partial<User>                 // Todos opcionales
Required<User>                // Todos requeridos

// Inmutabilidad
Readonly<User>                // Solo lectura

// Objetos dinámicos
Record<string, User>          // { [key: string]: User }

// Unions
Extract<Status, "active" | "pending">  // Solo esos valores
Exclude<Status, "inactive">            // Todos excepto ese

// Nullability
NonNullable<string | null>    // string

// Funciones
ReturnType<typeof myFunction>   // Tipo de retorno
Parameters<typeof myFunction>   // Tupla de parámetros
```

## Importación de Tipos

```typescript
// ✅ SIEMPRE: Importar tipos con `type`
import type { User, Service } from "@/lib/types";

// ✅ Mezcla de valores y tipos
import { createUser, type UserConfig } from "@/lib/users";
```

## Props en Componentes Astro

```astro
---
// ✅ Interface Props en frontmatter
interface Props {
  title: string;
  description?: string;
  variant?: "primary" | "secondary";
}

const { title, description, variant = "primary" } = Astro.props;
---
```

## Inferencia vs Anotación Explícita

```typescript
// ✅ Dejar que TypeScript infiera cuando es obvio
const name = "Carlos";              // string
const numbers = [1, 2, 3];          // number[]
const double = (n: number) => n * 2;  // retorno inferido: number

// ✅ Anotar cuando mejora claridad o es necesario
const users: User[] = [];           // Array vacío necesita tipo
function getUser(id: string): Promise<User | null> {
  // Retorno explícito para funciones complejas
}
```

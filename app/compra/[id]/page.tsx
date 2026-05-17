import { mockProperties } from "@/lib/mock-data";
import CompraClient from "./client";

export async function generateStaticParams() {
  return mockProperties.map((p) => ({
    id: p.id,
  }));
}

export default async function CompraPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <CompraClient id={id} />;
}

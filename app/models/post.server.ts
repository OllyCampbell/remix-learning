import { prisma } from '~/db.server';

import type { Post } from "@prisma/client";

export { Post }

export async function getPosts() {
  return prisma.post.findMany();
}

export async function getPost(slug: string) {
  return prisma.post.findUnique({ where: { slug } });
}

export async function createPost(post: Pick<Post, 'markdown' | 'slug' | 'title'>) {
  return prisma.post.create({ data: post });
}

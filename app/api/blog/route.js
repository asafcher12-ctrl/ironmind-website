import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function GET() {
  const postsDir = path.join(process.cwd(), 'posts');
  
  try {
    const files = fs.readdirSync(postsDir).filter(file => file.endsWith('.md'));
    
    const posts = files.map(file => {
      const filePath = path.join(postsDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(content);
      
      return {
        slug: file.replace('.md', ''),
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
      };
    }).sort((a, b) => new Date(b.date) - new Date(a.date));
    
    return Response.json(posts);
  } catch (error) {
    return Response.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

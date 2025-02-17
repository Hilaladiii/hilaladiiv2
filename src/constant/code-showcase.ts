const ZUSTAND = `import { create } from 'zustand';

interface AuthState {
  user: { name: string; email: string } | null;
  setUser: (user: { name: string; email: string }) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));`;

const MIDDLEWARE = `import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  res.json({ message: 'You are authenticated', user: session.user });
}
`;

const NESTJWT = `import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) throw new UnauthorizedException('No token provided');

    try {
      const decoded = this.jwtService.verify(token);
      req['user'] = decoded;
      next();
    } catch {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
`;

const PAGINATION = `import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page = 1, limit = 10 } = req.query;

  const students = await prisma.student.findMany({
    skip: (Number(page) - 1) * Number(limit),
    take: Number(limit),
    orderBy: { createdAt: 'desc' },
  });

  const total = await prisma.student.count();
  
  res.json({ students, totalPages: Math.ceil(total / Number(limit)) });
}
`;

export const CODE_SHOWCASES = [ZUSTAND, MIDDLEWARE, NESTJWT, PAGINATION];

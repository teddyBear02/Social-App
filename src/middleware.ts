import { NextResponse,NextRequest } from 'next/server';
import Cookies from 'js-cookie';

export function middleware(request: NextRequest) {
  const token = Cookies.get("Token");
  
  if(token) {
    return NextResponse.redirect(new URL('/home', request.url))
  }else{
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }
}

export const config = {
  matcher: ['/','/auth'],
};  
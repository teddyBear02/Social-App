import { NextResponse,NextRequest } from 'next/server';
import Cookies from 'js-cookie';

export function middleware(request: NextRequest) {
  const sessionID = Cookies.get("sessionID");
  
  if(sessionID) {
    return NextResponse.redirect(new URL('/home', request.url))
  }else{
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }
}

export const config = {
  matcher: ['/','/auth'],
};  
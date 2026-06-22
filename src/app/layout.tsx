import { Scroll } from '@/components/temporary/Scroll';
import 'normalize.css/normalize.css';
import './layout.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body>
        <Scroll />
        <div className='app'>{children}</div>
      </body>
    </html>
  );
}

import { CookieConsentForm } from '@/app/root/layout/components/cookie-consent';
import { LogoReadonly } from '@/components/ui';

export const CookieBanner = () => (
  <section
    aria-label='Cookie-banner för att samla in samtycke'
    className='fixed inset-0 z-[50] flex h-screen w-full flex-col justify-center gap-6 bg-background p-8 sm:p-12 md:px-[20vw] xl:mx-auto xl:w-[90vw]'
  >
    <LogoReadonly className='sm:text-center' />

    <p className='mb-4 text-balance leading-6 tracking-wide'>
      Vi på TeknikExpressen vill ge dig en unik shoppingupplevelse, för detta
      använder vi egna cookies och andra teknologier. Vissa av dessa är
      nödvändiga för att vår webbutik ska fungera Genom att välja
      &apos;Acceptera vald&apos; ger du samtycke till alla syften. Du kan också
      göra val nedan och välja &apos;Acceptera inte&apos;. Du kan när som helst
      ångra eller ändra ditt samtycke på &apos;Mitt konto&apos;.
    </p>

    <CookieConsentForm />
  </section>
);
CookieBanner.displayName = 'CookieBanner';

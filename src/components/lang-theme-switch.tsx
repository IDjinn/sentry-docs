'use client';

import { ChevronDown, Languages } from 'lucide-react';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from 'fumadocs-ui/components/ui/popover';
import { useI18n } from 'fumadocs-ui/contexts/i18n';
import { ThemeSwitch } from 'fumadocs-ui/layouts/shared/slots/theme-switch';
import { useTranslations } from '@fuma-translate/react';

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function LangThemeSwitch(
  props: React.ComponentProps<typeof ThemeSwitch>,
) {
  const { locales, locale, onChange } = useI18n();
  const t = useTranslations({ note: 'language switcher' });

  return (
    <div
      className={cx(
        'inline-flex items-center rounded-lg border bg-fd-secondary/50 p-0.5 pe-0 ps-0.5 text-fd-muted-foreground',
        props.className,
      )}
    >
      <Popover>
        <PopoverTrigger
          aria-label={t('Choose a language', { note: 'aria-label' })}
          className={cx(
            buttonVariants({ color: 'ghost', size: 'icon-sm' }),
            'gap-0.5 data-[state=open]:bg-fd-accent',
          )}
        >
          <Languages className="size-4.5" />
          <ChevronDown className="size-3" />
        </PopoverTrigger>
        <PopoverContent className="flex flex-col gap-0.5 p-1">
          <p className="p-2 text-xs font-medium text-fd-muted-foreground">
            {t('Choose a language')}
          </p>
          {locales?.map((item) => (
            <button
              key={item.locale}
              type="button"
              className={cx(
                'rounded-lg px-2 py-1.5 text-start text-sm transition-colors',
                item.locale === locale
                  ? 'bg-fd-primary/10 text-fd-primary'
                  : 'text-fd-muted-foreground hover:bg-fd-accent hover:text-fd-accent-foreground',
              )}
              onClick={() => onChange?.(item.locale)}
            >
              {item.name}
            </button>
          ))}
        </PopoverContent>
      </Popover>
      <ThemeSwitch {...props} className="rounded-full border-0 bg-transparent p-0" />
    </div>
  );
}

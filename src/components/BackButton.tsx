import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface BackButtonProps {
  to?: string;
  label?: string;
}

export const BackButton = ({ to, label = 'Volver' }: BackButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleClick}
      className="mb-4 border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/30 hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:border-blue-400 dark:hover:border-blue-600 transition-all group"
    >
      <ArrowLeft className="mr-2 h-4 w-4 text-blue-600 dark:text-blue-400 group-hover:-translate-x-1 transition-transform" />
      <span className="text-blue-700 dark:text-blue-300 font-medium">{label}</span>
    </Button>
  );
};

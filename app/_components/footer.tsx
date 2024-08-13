import { Card, CardContent } from "./ui/card";

const Footer = () => {
  return (
    <footer>
      <Card className="px-5 py-6">
        <CardContent>
          <p className="text-sm text-gray-400">©2023 Copyright</p>
          <span className="font-bold">FSW Barber</span>
        </CardContent>
      </Card>
    </footer>
  );
};

export default Footer;


type Props = {
  products: string;
  price: number;
};

export default function ContentCard(props: Props) {
  return (
    <div>
      <h1>Content</h1>
      <p>{props?.products}</p>
    </div>
  );
}

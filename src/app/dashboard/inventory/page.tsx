import ClothesCard from "@/app/ui/dashboard/ClothesCard";
import ClothesRow from "@/app/ui/dashboard/ClothesRow";

export default function Inventory() {
  return (
    <div className='m-16'>
      <ClothesRow>
        <ClothesCard />
        <ClothesCard />
        <ClothesCard />
        <ClothesCard />
        <ClothesCard />
        <ClothesCard />
        <ClothesCard />
      </ClothesRow>
      <ClothesRow>
        <ClothesCard />
        <ClothesCard />
        <ClothesCard />
        <ClothesCard />
        <ClothesCard />
        <ClothesCard />
        <ClothesCard />
      </ClothesRow>
      <ClothesRow>
        <ClothesCard />
        <ClothesCard />
        <ClothesCard />
        <ClothesCard />
        <ClothesCard />
        <ClothesCard />
        <ClothesCard />
      </ClothesRow>
    </div>
  );
}

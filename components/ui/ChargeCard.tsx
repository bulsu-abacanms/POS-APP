import React from 'react';
import chargeCardStyles  from '../../utilities/components/chargeCardStyles';

interface ChargeCardProps {
  amount: number;
}

const ChargeCard: React.FC<ChargeCardProps> = ({ amount }) => {
  return (
    <div style={chargeCardStyles.card as React.CSSProperties}>
      <div style={chargeCardStyles.header as React.CSSProperties}>
        <div style={chargeCardStyles.title as React.CSSProperties}>Total Amount Due</div>
        <div style={chargeCardStyles.amount as React.CSSProperties}>${amount.toFixed(2)}</div>
      </div>
      
      <div style={chargeCardStyles.circleLarge as React.CSSProperties} />
      <div style={chargeCardStyles.circleSmall as React.CSSProperties} />
    </div>
  );
};

export default ChargeCard;

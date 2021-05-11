%변수 설정 (4kW의 출력을 가진 모델 학습시키고자 할 때)
%x1: laser power, x2: welding speed, x3: beam diameter
x1=4;
%linspace(1,7)은 1부터 7까지 100등분한 행렬
x2=linspace(1,7);
%linspace(0.1,0.7)은 0.1부터 0.7까지 100등분한 행렬
x3=linspace(0.1,0.7);
[numRows,numCols]=size(x2);

% laserdata는 사용한 데이터 파일
% input은 1~3열, output은 4열에 있으며, input data 사용
% 1: power, 2: welding speed, 3: beam diameter, 4: penetration depth
A=laserdata([1],[1:3]);
 
%trainedModel은 회귀 학습 후 모델 내보내기를 통해 불러온 파일
Z2=Cal(x1,x2,x3,numCols,A,trainedModel);

%그래프 label 지정
axlbl = @(h) [xlabel(h,'Welding speed (m/min)'); ylabel(h,'Beam diameter (mm)')];
figure(1)
contour(x2,x3,Z2,'ShowText','on');
title('Contour plot for penetration depth for 4 kW laser power');
axlbl(gca);

%원하는 변수에 따라 등고선 그리기
function[Z]=Cal(x1,x2,x3,numCols,A,trainedModel)
for i = 1:numCols
    for j = 1:numCols
        A{1,1}=x1;
        A{1,2}=x2(j);
        A{1,3}=x3(i);
      
        Z(i,j)=trainedModel.predictFcn(A([1],:));
    end
end
end


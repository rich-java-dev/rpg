cd frontend
npm run-script build
cd ../
cp -rf frontend/build/* backend/react-build/
cd backend
npm run-script build
docker image build -t game .
